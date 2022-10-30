//1)
//Написать функцию, которая принимает два параметра и складывает их.
//Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
//Примеры результатов вызова функции:
//sum(2,4); // 6
//sum('d',4); // введенные данные не являются числами
//sum(1, [2]); // введенные данные не являются числами
//wsum(1); // введите два параметра
//sum(); // введите два параметра

let c = prompt('введите число')
let d = prompt('введите число')

function slsh (a,b) {
     a = Number(a)
     e = typeof a
     b = Number(b)
     f = typeof b
     if (e == "number" & f == "number") {
       console.log(a + b)
     } else if (e == "number" & f == "string") {
        console.log("данные числа не являются числами")
     } else if (e == "string" & f == "number") {
      console.log("данные числа не являются числами")
   }
}

slsh(c,d)

//2)
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
//"Функция "square" не может быть вызвана без аргумента"
//function square(a) {
//  console.log(a * a)
//}
//square(10) // 100
//square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

function square(a) {

  console.log(a * a)
}

square()

//3)
//Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
//Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
//Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета
//Написать функцию в стрелочном синтаксисе.

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let number = getRandomInteger(1,10)
function quesnumber() {
    let vsh = prompt('введите число')
    if (vsh == number){
      console.log('Вы выиграли!')
    } else {
      console.log(`Вы не угадали, ваше число - ${vsh}, а выпало число ${number}`)
    }
}
quesnumber()

//4)
//Определить массив, например let arr = [5, 4, 3, 8, 0];
//Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
//Например, запуск функции filterFor(arr, 5) дает результат [5,8]
//запуск функции filterFor(arr, 10) дает результат []
//запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arr2 = [];
function filterFor(arr,a) {
  for (let i = 0; i < arr.length ; i++) {
     if (arr[i] >= a) {
      arr2.push(arr[i]);
     }
  }
  console.log(arr2)
}
filterFor([5, 4, 3, 8, 0],3)

//5)
//Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

//6)
//Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
//Проверить работу функции можно на объекте:
//const objectWithNumbers = {
//  a: 10,
//  b: 20,
//  c: 'string',
//  d: 12,
//}

const objectWithNumbers = [10,20,'string',12]
let sum = 0;
function sumObjectValues(arr) {
  for (let i = 0;i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        sum = sum + arr[i]
      }
  }
  console.log(sum)
}
sumObjectValues([5,'num',10,2,'string'])