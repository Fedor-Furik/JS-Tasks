// 1 Создать произвольную переменную, присвоить ей значение. C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.


let name = 'hidden';
if (name == 'hidden') {
   name = 'visible';
    alert(name)
}

// 2 Создать переменную и присвоить ей число.Записать условие:- если переменная равна нулю, присвоить ей 1;- если меньше нуля - строку “less then zero”;- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let number = 0;
if (number == 0) {
    number = 1;
} else if (number < 0) {
    number = 'less then zero';
} else {
   number *= 10;

}

// 3 Запросите у пользователя число и запишите его в переменную. (Не забывайте, что от пользователя мы всегда получаем строку).Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.Выполните это задание, используя тернарный оператор (: ?)

let stnum = Number(prompt('Введите число'));
let rezult = (shnum <= 5) ? '0' : '1';

// 4 Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).* предусмотреть вариант ввода одинаковых чисел

let num1 = Number(prompt('первое число'));
let num2 = Number(prompt('второе число'));

if (num1 >= num2) {
   console.log(num1)
} else {
   console.log(num2)


// 5 Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль

let num1 = Number(prompt('первое число'));
let num2 = Number(prompt('второе число'));
let otvet;
if (num1 % num2 === 0) {
    otvet = ('true')
} else {
    otvet = ('false')
}
console.log(otvet)

// 6 Запросить у пользователя средний балл, записать в переменную.Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).

let bal = prompt('введите свой средний бал')
if (bal <= 4) {
    alert('Двоечник, иди учись!')
} else if (bal > 4 || bal < 9) {
    alert('Неплохо, но давай еще поднажмем!')
} else if (bal == 9 || bal == 10) {
   alert('Ого, да ты настоящий отличник!')
}

// 7 Запросить у пользователя ответы на 2 вопроса:- балл за экзамен (от 0 до 100)- количество выполненных проектов (от 0 и больше)Вывести в консоль общий выпускной балл в соответствии с этими значениями:- 100, если балл за экзамен более 90 или количество проектов более 10.- 90, если балл за экзамен более 75 и количество проектов не менее 5.- 75, если балл за экзамен более 50 и количество проектов не менее 2.- 0 во всех других случаях.

let bali = Number(prompt('ваш бал за экзамен'));
let proct = Number(prompt('ваше количество проектов'));
let obbal = 0;
if (bali > 90 && proct > 10) {
   obbal = 100;
} else if (bali > 75 && proct > 5) {
    obbal = 90;
} else if (bali > 50 && proct > 2) {
    obbal = 75;
} else {
    obbal = 0;
}
console.log(obbal);

// 8 День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.

let den_ar = Number(prompt('на сколько арендовать авто?'))
let skitka = 0;
if (den_ar >= 7) {
    skitka = 50;
} else if (den_ar >= 3) {
    skitka = 20;
}
let summa = den_ar * 40 - skitka;
alert(summa);

// 9 Создать переменную и записать в нее число, например 10. 10 раз увеличивать значение этой переменной на 1. Результат вывести в консоль.

let shiclo = 10;
for (let i; i < 10; i++) {
    shiclo += 1
}
console.log(shiclo)
     
// 10 Увеличивая счетчик цикла на 2, нужно 5 раз:- запрашивать у пользователя ввод числа - проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"

for (let i; i < 10; i+2) {
      let chisla = Number(prompt('введите число'));
      if (chisla == 10) {
        console.log('Число равно 10');
      } else {
        console.log('Число не равно 10');
      }
}

// 11 Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16... * Задавать количество чисел, которые нужно вывести, при помощи функции prompt.

let dl_kyba = prompt('введите число')
let dl_kyban = Number(dl_kyba)
console.log(dl_kyba ** 2)

// 12   Напишите программу, которая выводит в консоль числа от 1 до 100. При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»


