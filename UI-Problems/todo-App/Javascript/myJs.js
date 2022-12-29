(function() {
 var dom = {
   $inputEl: document.getElementById("todo-input"),
   $addButtonEl: document.getElementById("add-button"),
   $toDoList: document.getElementById("todo-list")
 };

  // adding event listerner - 
  dom.$inputEl.addEventListener('keyup', handleInput);
  dom.$addButtonEl.addEventListener('click', handleAddAction);


  //functions
  function handleInput(e) {
    handleButtonState();
  }

  function handleButtonState() {
     if((dom.$inputEl.value).length){
      dom.$addButtonEl.disabled = false;
    } else {
      dom.$addButtonEl.disabled = true;
    }
  }

  function createNoteDomElement() {
    const newNote = document.createElement('li');
    const h2 = document.createElement('h2');
    const removeButton = document.createElement('button');
    
    h2.innerText = dom.$inputEl.value;
    removeButton.innerText = 'X';
    removeButton.classList.add('delete-button');

    removeButton.addEventListener('click', function(e) {
      this.parentElement.remove()
    });

    newNote.appendChild(h2);
    newNote.appendChild(removeButton);
    dom.$toDoList.appendChild(newNote);
  }

  function handleAddAction() {
    createNoteDomElement();
    dom.$inputEl.value = "";
    dom.$addButtonEl.disabled = true;
  }

})(); // iffi
