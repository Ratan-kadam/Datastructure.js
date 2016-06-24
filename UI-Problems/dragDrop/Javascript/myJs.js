
function draggingStarted(event){
    event.dataTransfer.setData("token",event.target.id);
}

function dropped(event){
  event.preventDefault();
     var itemsId =event.dataTransfer.getData("token");
     alert(itemsId);
     var cart = document.getElementById("cartID");
   // event.target.appendChild()
    cart.appendChild(document.getElementById(itemsId));

    //console.log(cart);
}

function stopDefaultBehaviour(event){
  event.preventDefault();
}

