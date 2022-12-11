//1)
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
//Вам понадобятся методы строк.

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1)
}

ucFirst('Str')

//2)
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
//Функция должна быть нечувствительна к регистру.

let b = prompt('введите слово');
a = b.toLocaleLowerCase();
console.log(e)
function checkSpam(e){
    if (e.includes('badword') == true) {
        console.log(true)
    } else if (e.includes('xxx') == true) {
        console.log(true)   
    } else {
        console.log(false)
    }
    
}
checkSpam(a)

//3)
//Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
//Обратите внимание: метод reverse существует только у массивов.

function reverse(str) {
        return str.split("").reverse().join("");
    }  
alert(reverse('привет Женя'))

//4)
//Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой,
// а затем название станции, пригодное для чтения человеком. 
//let stations = [
//'MAN675847583748sjt567654;Manchester Piccadilly',
//'GNF576746573fhdg4737dh4;Greenfield',
//'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//'SYB4f65hf75f736463;Stalybridge',
//'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
//];

let stations = [
   'MAN675847583748sjt567654;Manchester Piccadilly',       //0
   'GNF576746573fhdg4737dh4;Greenfield',                   //1
   'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',    //2
   'SYB4f65hf75f736463;Stalybridge',                       //3
   'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'            //4
    
    ];

for (let i = 0; i < stations.length; i++) {
    let zn = stations[i].indexOf(';')
    let kod = stations[i].slice(0,3)
    let nzv = stations[i].slice(zn + 1,-1)
    console.log(`${kod}: ${nzv}` )
}

//5)
//Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
//Пример:
//let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
//console.log(unique(strings) ); должен вывести "кришна, харе, :-O"

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
function unique(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
      if (!(newArray.includes(array[i]))) {
        newArray.push(array[i])
      }
    }
    return newArray
}

console.log(unique(strings))


//6)
//Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.
//Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
//Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:
//1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому удалите возраст собак из Жениного массива.
//2. Создайте общий массив с данными Жени (исправленными) и Юли
//3. Для каждой кошки этого общего массива выведите в консоль текст:
//- если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет
//- если котёнок - Кошка № 2 ещё котёнок
//4. Вызовите функцию для двух наборов тестовых данных.
//Тестовые данные:
//1.  Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
//Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
//2.  Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
//Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]

function verifyCats(catsJane,catsJulia) {
      let arr = [];
      catsJane.pop()
      catsJane.shift()
      arr = arr.concat(catsJane,catsJulia)
      arr.forEach(function(item,index){
          let status = function(item){return item >= 2 ? 'взрослая' : 'котенок'}
          console.log(`Кошка № ${index + 1} ${status}}, ей ${item} лет`)
      })
      
}
verifyCats([4, 5, 3, 11, 6, 2, 4, 1, 5, 9],[2, 4, 5, 1, 13, 2, 15, 8, 3, 7])
verifyCats([3, 5, 9, 14, 1, 2, 6, 8, 3, 10],[8, 2, 10, 1, 2, 5, 6, 3, 1, 4])


//7)
//Решить 4 задание из прошлой темы, используя метод filter
//Определить массив, например let arr = [5, 4, 3, 8, 0];
//Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
//Например, запуск функции filterFor(arr, 5) дает результат [5,8]
//запуск функции filterFor(arr, 10) дает результат []
//запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arr = [5, 4, 3, 8, 0];
function filterFor(arr, a) {
    let pozitnumbers = arr.filter(function(item){
        return item >= a
    })
    console.log(pozitnumbers)
}
filterFor(arr, 5)                                         

//8)
//Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:
//1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7.
//2. Исключает всех кошек младше 18 человеческих лет.
//3. Возвращает средний человеческий возраст для всех взрослых кошек.
//Вызовите функцию для обоих наборов тестовых данных.
//Тестовые данные:
//1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
//2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]

function getAverageHumanAge(catAges) {
    let vzorsl = [];
    let vozrastofcat = catAges.reduce(function(acc,item){
    let vz = 0;
      if (item <= 2) {
        vz = item * 10
      } else {
        vz =  item * 7      
      }
      if (vz >= 18) {
        vzorsl.push(vz)
      }
      acc++

    }, 0)                                                                  
    let sum = 0;
      for (let i = 0; i < vzorsl.length; i++) { 
            sum = sum + vzorsl[i]
      }
    console.log(sum / vzorsl.length)  
}
getAverageHumanAge([7 , 3, 2, 4, 1, 15, 8, 1, 9, 2])
getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2])
