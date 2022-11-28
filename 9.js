
//1)Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

function ulplus () {
    let li = document.createElement('li')
    document.querySelector('ul').appendChild(li)
    li.innerText = 'hello World'
}
document.querySelector('li').onclick = ulplus;

//2)Вставить в html теги input и div (просто предусмотреть в разметке).
//Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, 
//как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

const input = document.querySelector('input')
input.addEventListener('keyup', () => console.log(input.value) )

//3)Создать в html форму с инпутом и кнопкой. 
//Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст
// (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

const form = document.querySelector('form')
form.addEventListener('submit', () => {
    let li = document.createElement('li')
    document.querySelector('ul').appendChild(li)
    li.innerText = input.value
})

//4)Калькулятор. 
//Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. 
//Добавить в html div. Внутри select будут options - арифметические знаки.
//В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, 
//выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). 
//Результат отображается в div.

const formy = document.querySelector('form')
formy.addEventListener('sumbit', () => {
let i1 = document.querySelector(".intp1");
let i2 = document.querySelector(".intp2");
let arif = select.value
let p = document.createElement('p')

if (arif == '+') {
  document.querySelector('div').appendChild(p)
  p.innerText = i1 + i2
} else if (arif == '-') {
  document.querySelector('div').appendChild(p)
  p.innerText = i1 - i2
  }  else if (arif == '/') {
    document.querySelector('div').appendChild(p)
    p.innerText = i1 / i2
    }  else if (arif == '*') {
      document.querySelector('div').appendChild(p)
      p.innerText = i1 * i2
      } 
})
//5)Вставить в разметку html тег button без js
//(просто предусмотреть в разметке). 
//При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. 
//При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. 
//Использовать обработку событий mouseenter, 
//mouseleave на этой кнопке.

function vz(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  }

const button = document.querySelector('button')
form.addEventListener('mouseenter', () => {
         button.background-color(vz(0,255),vz(0,255),vz(0,255))       
})
form.addEventListener('mouseleave', () => {
     button.rotate(vz(-180,180))
})
