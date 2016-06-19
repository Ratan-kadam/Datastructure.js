// js bin this is sample commit


setTimeout(function(){
    document.getElementById("popup").classList.remove("HideMe");

    document.getElementById("popup").classList.add("ShowMe");
},3000);



document.getElementById("myClick").addEventListener("click",function() {

    document.getElementById("popup").classList.add("HideMe");

});