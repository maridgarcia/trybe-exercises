function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const getCalendar = document.querySelector('#days');

function fillCalendar() {
for (let index = 0; index < dezDaysList.length; index += 1) {
  let keepDays = dezDaysList[index];
  let createLi = document.createElement('li');
  if (keepDays === 24 | keepDays === 31) {
      createLi.className = 'day holiday';
      createLi.innerHTML = keepDays;
      getCalendar.appendChild(createLi);        
  } else if (keepDays === 4 | keepDays === 11 |keepDays === 18) {
      createLi.className = 'day friday';
      createLi.innerHTML = keepDays;
      getCalendar.appendChild(createLi);  
  } else if (keepDays ===  25) {
      createLi.className = 'day friday holiday';
      createLi.innerHTML = keepDays;
      getCalendar.appendChild(createLi);
  } else {
      createLi.className = 'day';
      createLi.innerHTML = keepDays;
      getCalendar.appendChild(createLi);
  }
}
}

fillCalendar();

let feriado = document.createElement('button');
feriado.id = 'btn-holiday';
feriado.innerHTML = 'Feriado';
let btnContainer = document.querySelector('.buttons-container');
btnContainer.appendChild(feriado);

function showHolidays() {
let btnHoliday = document.querySelector('#btn-holiday');
let holiday = document.querySelectorAll('.holiday');
let background = 'rgb(238,238,238)';
let setColor = 'white';

btnHoliday.addEventListener('click', function (){
for (let index = 0; index < holiday.length; index += 1) {
  if(holiday[index].style.backgroundColor === setColor) {
      holiday[index].style.backgroundColor = 'darkgreen';        
      holiday[index].style.color = 'white';
  } else {
       holiday[index].style.backgroundColor = setColor;
       holiday[index].style.color = '#666';
   }
  }
})
}

showHolidays();

function friday(string) {
  let fridayBtn = document.createElement('button');
  fridayBtn.id = 'btn-friday';
  fridayBtn.innerHTML = 'Sexta-feira';
  btnContainer.appendChild(fridayBtn);
}

friday('Sexta-feira');

function clickFriday (fridayDays){
  let fridayBtn = document.querySelector('#btn-friday');
  let sextaFeira = document.querySelectorAll('.friday');
  let sextaFeiraContent = 'Sexta-feira!';

  fridayBtn.addEventListener('click', function(){
    for (let index = 0; index < sextaFeira.length; index += 1) {
      if(sextaFeira[index] !== sextaFeiraContent) {
        sextaFeira[index].innerHTML = sextaFeiraContent;
      } else {
        sextaFeira[index].innerHTML = fridayDays[index];
      }
    }
  })
}

let dezFridays = [4, 11, 18, 25];
clickFriday(dezFridays);

function zoomIn() {
  let getDays = document.querySelector('#days');
  getDays.addEventListener('mouseover', function (event){
    event.target.style.fontSize = '30px';
  })
}

function zoomOut(){
  let getDays = document.querySelector('#days');
  getDays.addEventListener('mouseout', function (event){
    event.target.style.fontSize = '20px';
  })

}

zoomIn(event);
zoomOut(event);

function createTasks(taskName) {
  let myTasks = document.querySelector('.my-tasks');
  let span = document.createElement('span');
  
  span.innerHTML = taskName;
  myTasks.appendChild(span);
    
}

createTasks('Cozinhar')


function subtitle(color) {
  let myTasks = document.querySelector('.my-tasks');
  let divTasks = document.createElement('div');
  divTasks.className = 'task';
  divTasks.style.backgroundColor = color;
  myTasks.appendChild(divTasks);
}

subtitle('darkgreen');

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};
setTaskClass();

// Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
function dayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let getDays = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let dayColor = taskDiv.style.backgroundColor;

  getDays.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== dayColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === dayColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
      {
    }
  })
}

dayColor();

