(function () {
this.stack = []; 
var dom = {
    $containerEl: document.getElementById('container'),
}
// caching all the box elements
 for(var i=0; i < 9 ;i++) {
    dom[`$box${i}`] = document.getElementById(`box${i}`);
 }

function processClick(e) {
    if (!this.stack.includes(e.target.id)) {
       this.stack.push(e.target);
       dom[`$${e.target.id}`].style.backgroundColor = "green";
    }

    if (this.stack.length == 8) {
        interval = 0;
        for (var i=this.stack.length-1;  i >= 0 ; i--) {
             interval = interval + i + 500;
            (function(i) {
                setTimeout(() => {
                    this.stack[i].style.backgroundColor = "red";
                    if (i==0) {
                        this.stack = [];
                    }
                },interval)
            })(i);
        }
    }

}

 dom.$containerEl.addEventListener('click', processClick.bind(this));

})(); // iffi