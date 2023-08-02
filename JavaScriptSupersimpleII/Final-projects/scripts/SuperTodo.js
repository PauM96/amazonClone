const todoList = JSON.parse(localStorage.getItem('listStorage')) || [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <input class="js-checkbox" type="checkbox">
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-deleteButton"
      >Delete</button> 
    `;
    todoListHTML += html;

  });
  
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

    document.querySelectorAll('.js-deleteButton')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
      });
    });

  const todoListString = JSON.stringify(todoList);
  localStorage.setItem('listStorage', todoListString);

}

document.querySelector('.js-addTodo')
  .addEventListener('click', () => {
    addTodo();
});


document.addEventListener('DOMContentLoaded', () => {
  const nameListBox = document.querySelector('.js-nameListBox');
  const header = document.querySelector('.js-header');
  const nameList = document.querySelector('.js-nameList');
  const nameForm = document.querySelector('.js-nameForm');

  const savedListName = localStorage.getItem('listName');
  if (savedListName) {
    header.innerHTML = savedListName;
  };

  nameList.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {

      header.innerHTML = nameList.value;
      nameList.value = '';
      localStorage.setItem('listName', header.innerText)

      event.preventDefault();
  }});
});


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
  });


  inputElement.value = '';

  renderTodoList();
};