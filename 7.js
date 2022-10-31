//1)
//Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:

//Math.round(x) Возвращает значение числа, округлённое до ближайшего целого.
//Math.ceil(x) Возвращает значение числа, округлённое к большему целому.
//Math.floor(x) Возвращает значение числа, округлённое к меньшему целому

//В комментариях к каждой строке напишите, как работают эти округления.


console.log(Math.round(5.4));
console.log(Math.ceil(5.4));
console.log(Math.floor(5.4));

console.log(Math.round(5.5));
console.log(Math.ceil(5.5));
console.log(Math.floor(5.5));

console.log(Math.round(5.6));
console.log(Math.ceil(5.6));
console.log(Math.floor(5.6));

//2)
//Выведите в консоль фразы в 2 строки:
//Сегодня 27.10.2022 (здесь будет ваша дата)
//19 часов 20 минут (здесь будет ваше время)

let newDate = new Date();
let monts = newDate.getMonth();
let date = newDate.getDate();
let year = newDate.getFullYear();
let hour = newDate.getHours();
let min = newDate.getMinutes();

console.log(`Сегодня ${date}.${monts}.${year}`);
console.log(`${hour} часов ${min} минут`);
