function Task(str){
    var myTask= str;

     this.getMyHTML= function() {

         var myNewTask = document.createElement("div");

         var button = document.createElement("BUTTON");
         var textNode = document.createTextNode("DeleteMe");
         button.appendChild(textNode); // then task

         var textNode2= document.createTextNode("No_" + count);
         myNewTask.appendChild(textNode2); // first attaching the task number

         var textNode3= document.createTextNode(str);
         myNewTask.appendChild(textNode3); // then attaching the task value

         var br=document.createElement("BR");
         myNewTask.appendChild(br); // attaching <br>

         button.addEventListener("click",function(){
             var taskId = this.parentNode.childNodes[0].data; // data imp
             delete  MyAllTask[taskId]; // first removing the entry from database
             this.parentNode.remove(); // removing the element from dom
         });
         myNewTask.appendChild(button);

         return myNewTask;
     }
}

/* Model */
var count =0;
var taskId=0;
var MyAllTask={};



Task.prototype.attachMe= function (newHtml){
    var  bucketCount = count % 4;
    console.log("bucketCount:" + bucketCount);
    document.getElementsByClassName("bucket")[bucketCount].appendChild(newHtml);
    count++;
};

var AddTask = function(){
    var task = document.getElementsByTagName('input')[0].value;
    console.log(task);
    var obj = new Task(task);
    MyAllTask["No_"+count] = task;  // DB saving : saving count number and respective message
    var newHtml = obj.getMyHTML();
    obj.attachMe(newHtml);
};


function search(){
    var task = document.getElementsByTagName('input')[1].value;
    var regex1 = new RegExp('(<div class="bucket .*">)(.*'+task+')(.*<\/div>)');

//var allHTML= document.body.innerHTML;
   var display_div= document.getElementsByClassName("Display")[0];
    var Result_div= document.getElementsByClassName("Result")[0];
    var allHTML = display_div.innerHTML;
    display_div.removedNodes;

    console.log(allHTML);
    var visibleDiv = allHTML.match(regex1);

    console.log(visibleDiv);
    document.body.innerHTML=" ";
    for(var i in visibleDiv){

        document.body.innerHTML += visibleDiv[i];

    }
}








