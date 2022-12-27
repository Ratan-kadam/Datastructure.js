(function () {
const API_BASE_URL = 'https://dummyjson.com/comments';
let SKIP = 0;
let paginationSize = 50;
let skipOtherRequest = false;

var dom = {
    $containerEl: document.getElementById('container'),
}

dom.$containerEl.addEventListener('scroll', debounce(handleScroll, 5000));

//DEBOUNCE 

function debounce(callback, delay) {
  var timer;
  return function (...args) {
    if (timer) {
      console.log("new request came - clearing timer:", new Date());
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback.call(this, ...args);
    }, delay);
  }
}

//function 3
function handleScroll() {
  if (skipOtherRequest) {
    console.log("%%%%%% existing request in progress: skipping scroll calculation for now");
  }
  // scrollHeight - clientHeight - scrollTop
  var isScrollFinished = this.scrollHeight - this.clientHeight - this.scrollTop; // 0 
  if (!isScrollFinished) {
    console.log("#######scroll finished need to call next page");
    getNewTestimonials();
  }
}

// function 1
function fetchTestimonial() {
  skipOtherRequest = true;
 return fetch(`${API_BASE_URL}?limit=${paginationSize}&skip=${SKIP}`)
        .then(res => {
           var result = res.json(); // imp
           skipOtherRequest = false;
           return result;
        })
        .catch(err => alert(err));
};

//function 2
function createDomElementsAndAttach(res) {
  const { comments = [], skip, total  } = res;
  console.log("res:", res);
  // we have all the records so creating the div, p and attaching to fragement and then attaching the fragment to dom
  var fragement = document.createDocumentFragment();
  for (var i = 0; i < comments.length; i++) {
    var para = document.createElement('p');
    para.textContent = comments[i].body;
    para.classList.add("testimonial"); // from css
    para.style.height= "20px"; // inline 
    fragement.appendChild(para);
    dom.$containerEl.appendChild(fragement);
  }
}

function getNewTestimonials() {
  fetchTestimonial() // fetching 5 records after index 10;
  .then(res => {
    SKIP = SKIP + res.comments.length;
    createDomElementsAndAttach(res);
  })
  .catch(error => alert(error));
}

// execution start
getNewTestimonials();

})();