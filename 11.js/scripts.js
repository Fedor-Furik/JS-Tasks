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


//2)Добавить в таск-мееджер кнопку, которая помечает все задачи как сделанные.
//- Добавить тег button в html код и повесить на него обработчик события click
//- В обработчике найти все существующие теги li при помощи функции document.querySelectorAll
//- В цикле или с помощью forEach обойти найденные в пункте теги li. Каждому проставить li.style.textDecoration = 'line-through';
//2) Добавить сохранение задач в таск-менеджер, чтобы они сохранялись между перезагрузками страницы.
//Основное задание - сохранять сами задачи, без удаления и выделения как сделанные.
//Сохранять удаление задач и статус выполнения - необязательно, т.к. это потребует значительной переработки кода.

document.getElementById('find_li').addEventListener('click', () => {
    let li = document.querySelectorAll('li')
    li.forEach(element => {
        element.style.textDecoration = 'line-through'
    });
    
})




