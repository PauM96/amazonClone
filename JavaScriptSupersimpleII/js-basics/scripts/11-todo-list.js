
let todoList1 = [];

function list1(){
  let todoBox1 = document.getElementById('todo1');
  let todoElement = todoBox1.value;

  todoList1.push(todoElement);
  console.log(todoList1);

  todoBox1.value = '';

};


let todoList2 = [];

renderTodoList();

function renderTodoList() {

  let todoListHTML = '';

  for(let i = 0; i < todoList2.length; i++){

    const todo = todoList2[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;

  }

  document.querySelector('.js-ArrayBox').innerHTML =
  todoListHTML;
}

function list2(){
  let todoBox2 = document.getElementById('todo2');
  let todoElement = todoBox2.value;

  todoList2.push(todoElement);
  console.log(todoList2);

  todoBox2.value = '';
  
  renderTodoList();

};

let todoList3 = [{
  name: 'Make Dishes',
  dueDate: '2022-02-09'
}, {
  name: 'Make Dishes',
  dueDate: '2022-02-09'
}];

renderTodoList3();

function renderTodoList3() {

  let todoListHTML = '';

  for(let i = 0; i < todoList3.length; i++){

    const todoObject = todoList3[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button
        class="delete-todo-button" 
        onclick="
        todoList3.splice(${i}, 1);
        renderTodoList3()
        ">Delete</button>
    `;
    todoListHTML += html;

  }

  document.querySelector('.js-ArrayBox3').innerHTML =
  todoListHTML;

}

function list3(){
  let todoBox3 = document.querySelector('.todo3');
  let name = todoBox3.value;

  let todoBoxDate = document.querySelector('.todo3-date');
  let dueDate = todoBoxDate.value;

  todoList3.push({
    //name: name,
    name,
    //dueDate: dueDate
    dueDate
  });

  todoBox3.value = '';
  
  renderTodoList3();

};



