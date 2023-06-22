//EXERCISES 3
  const month = 'November';
  const day ='09';
  const year ='2023';

  console.log(month+' '+day+' '+year)

  const result1 = 4+5*3;
  const result2 = (4+5)*3;

  console.log(result1);
  console.log(result2);

  const age = 26;
  const message = 'I am ' + age + ' years old.';
  console.log(message);
  console.log (typeof message);

//LESON 7

  let todos = ['Get groceries', 'Wash the car', 'Make dinner']
  todos.push('Pack my stuff')

  todos.forEach(function (todoTitle){
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
  })


//Exercises 5

  buttonCM = document.createElement('button');
  buttonCM.innerText = 'Add to do';
  document.body.appendChild(buttonCM);

  document.title = 'Now I understand JavaScript';


//Exercises 6

  function greeting(firstName){
    console.log('Hello '+ firstName);
  }

  greeting('Pau');

  function toUpper(nameCL){
    console.log (nameCL.toUpperCase());
  }

  toUpper ('Natasha');

  function inchToCm (length){
    console.log(length * 2.54);
  }

  inchToCm(40);

 // Exercises 7

 function toUpper7(stringArr) {
  let result = [];

  stringArr.forEach (function (str) {
    result.push(str.toUpperCase());
  });

  console.log(result);
}
toUpper7(['hello', 'world']);

function arrayDouble (dogCat){
  let barkmeow = [];

  dogCat.forEach(function(maramiau){;
    barkmeow.push(maramiau);
    barkmeow.push(maramiau);
    });
    console.log(barkmeow);
  };
 
  arrayDouble(['bark', 'meow']);




  


