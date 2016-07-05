
var url=""; // to keep track of current url
var myobj={};
function getTemplate(templateName){
     var myajax = new XMLHttpRequest();
     myajax.open("get","./"+templateName+".html");
     myajax.send();
     myajax.onreadystatechange=function(){
         if(myajax.readyState == 4 && myajax.status == 200){
             document.getElementsByClassName("results")[0].innerHTML =myajax.responseText;
             myobj.html = myajax.responseText;
             window.history.pushState(myobj,null,templateName);
             return myajax.responseText;
         }
     }
 }


function getTemplate1(templateName){
    var myajax = new XMLHttpRequest();
    myajax.open("get","./"+templateName+".html");
    myajax.send();
    myajax.onreadystatechange=function(){
        if(myajax.readyState == 4 && myajax.status == 200){
            document.getElementsByClassName("results1")[0].innerHTML =myajax.responseText;
            myobj.html2 = myajax.responseText;
            window.history.replaceState(myobj,null,templateName);
            return myajax.responseText;
        }
    }
}



window.addEventListener("popstate",function(e){
   console.log("popstate invoked");
      console.log(e);
    console.log(e.state);
    document.getElementsByClassName("results")[0].innerHTML = e.state.html;
    if(e.state.html2){
        document.getElementsByClassName("results1")[0].innerHTML = e.state.html2;
    }else {
        document.getElementsByClassName("results1")[0].innerHTML = "";
    }

});


function load1(){
    if( url !== "template1"){
      var ajaxResponse  = getTemplate("template1");
        url="template1";

    }

}

function load2(){
    if( url !== "template2"){
        var ajaxResponse = getTemplate("template2");

        url="template2";
    }

}

function load3(){
    if( url !== "template3"){
        var ajaxResponse = getTemplate("template3");
        url="template3";
    }

}

function load11(){
    if( url !== "template11"){
        var ajaxResponse  = getTemplate1("template11");
        url="template11";

    }

}

function load22(){
    if( url !== "template22"){
        var ajaxResponse = getTemplate1("template22");

        url="template22";
    }

}

function load33(){
    if( url !== "template33"){
        var ajaxResponse = getTemplate1("template33");
        url="template33";
    }

}