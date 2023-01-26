//1)
//1__Задать объект с полем name. 
//Задать переменную, которая будет хранить JSON упомянутого объекта. 
//Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

let obj = {name: ' Petr'}
let ObjJson = JSON.stringify(obj)
let alterObj = JSON.parse(ObjJson)

//2__Создать переменную user, в которой хранится объект. 
//Записать переменную в localStorage. 
//Создать переменную newUser, в которой будет храниться JS объект из localStorage

let user = {}
localStorage.user = 'sdd'
let newUser = localStorage.user
console.log(newUser)

//2)Добавить в таск-мееджер кнопку, которая помечает все задачи как сделанные.

let number = document.querySelectorAll('li')
console.log(number)
document.getElementById('find_li').addEventListener('click',() => {
    for(number in body){
        li = document.querySelectorAll('li')
        li.style.textDecoration = 'line-through';
    }
})

//3)Разместить на странице несколько картинок.
//При клике на любую картинку она плавно становится на бэкграунд всей страницы,
//а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом). 
//При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.


