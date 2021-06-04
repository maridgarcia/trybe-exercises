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

//   Exercício 1:
//1.1 O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

//a. Pegar os dias da array dezDaysList;
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

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome Feriados".

let feriado = document.createElement('button');
feriado.id = 'btn-holiday';
feriado.innerHTML = 'Feriado';
let btnContainer = document.querySelector('.buttons-container');
btnContainer.appendChild(feriado);

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

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

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira". *
// Adicione a este botão o ID "btn-friday" . *
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . *

function friday(string) {
  let fridayBtn = document.createElement('button');
  fridayBtn.id = 'btn-friday';
  fridayBtn.innerHTML = 'Sexta-feira';
  btnContainer.appendChild(fridayBtn);
}

friday();

