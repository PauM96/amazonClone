const todoList = JSON.parse(localStorage.getItem('listStorage')) || [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  let completedTasks = '';
  
  todoList.forEach((todoObject, index) => {
    const { name, dueDate, done } = todoObject;
    const html = `
      <input class="js-checkbox" type="checkbox" data-index="${index}" ${done ? 'checked' : ''}>
      <div class="${done ? 'done' : ''}">${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-deleteButton">Delete</button>
    `;
    if (done) {
      completedTasks += html;
    } else {
      todoListHTML += html;
    }
  });
  
  const todoListContainer = document.querySelector('.js-todo-list');
  todoListContainer.innerHTML = todoListHTML;

  const completedTasksContainer = document.querySelector('.js-struck-through-list');
  completedTasksContainer.innerHTML = completedTasks;

  document.querySelectorAll('.js-deleteButton').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });

  updateCheck(); // Llamada a la función para agregar los event listeners a las casillas de verificación

  const todoListString = JSON.stringify(todoList);
  localStorage.setItem('listStorage', todoListString);
};

function updateCheck() {
  document.querySelectorAll('.js-checkbox')
    .forEach((checkbox, index) => {
      checkbox.addEventListener('change', () => {
        const taskIndex = checkbox.dataset.index; // Obtener el índice de la tarea desde el atributo data-index
        todoList[taskIndex].done = checkbox.checked; // Actualizar el estado "done" de la tarea en el array de tareas
        renderTodoList(); // Volver a renderizar la lista para reflejar los cambios
    });
  });
}

document.querySelector('.js-addTodo').addEventListener('click', () => {
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
    }
  });
});

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate,
    done: false, // Inicialmente, el estado "done" de la tarea se establece como "false" (no hecha)
  });

  inputElement.value = '';

  renderTodoList(); 
};
