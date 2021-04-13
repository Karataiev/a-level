"use strict"


// Получить данные с https://jsonplaceholder.typicode.com/posts
// Вывести их на страницу в виде таблицы(пример выше).
// При нажатии на кнопку "удалять" выбранную запись из таблицы. 
// Удаление означает, что title и body параметры станут пустыми, 
// а вместо кнопки delete появится кнопка restore.
// Restore - отменяет удаление.
// Добавить инпут для title-а и инпут для body и кнопку "Добавить". 
// при нажатии, в начало таблицы добавляется запись со значениями из 
// путов. инпуты при этом очищаются
// При добавлении новой записи все id должны переиндексироватся

let records = [];

class Record {
    constructor(title, body) {
        this._title = title;
        this._body = body;
    }

    get isDeleted() {
        return this._isDeleted;
    }

    get title() {
        return this.isDeleted ? '' : this._title;
    }

    get body() {
        return this.isDeleted ? '' : this._body;
    }

    delete() {
        this._isDeleted = true;
    }
    restore() {
        this._isDeleted = false;
    }

}


function render(records) {
    let id = 1;
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    for (let record of records) {
        tbody.innerHTML += renderRecord(id++, record);
    }
}

function renderRecord(id, record) {

    const deleteButton = `
     <button class="btn-delete" style="background-color: silver" data-id="${id}">delete</button>
    `;
    const restoreButton = `
     <button class="btn-restore" style="background-color: gold" data-id="${id}">restore</button>
    `;

    const button = record.isDeleted ? restoreButton : deleteButton;


    return `
    <tr>
        <td>${id}</td>
        <td>${record.title}</td>
        <td>${record.body}</td>
        <td>
            ${button}
        </td>
    </tr>
    `;
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.onload = function () {
    for (let object of JSON.parse(xhr.response)) {
        let record = new Record(object.title, object.body);
        records.push(record);
    }
    render(records);
}

xhr.send();

document.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('btn-delete')) {
        records[target.dataset.id - 1].delete();
        render(records);
    }
});
document.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('btn-restore')) {
        records[target.dataset.id - 1].restore();
        render(records);
    }
});

const form = document.getElementById('form');
const title = document.getElementById('title');
const body = document.getElementById('body');

form.addEventListener('submit', function () {
    event.preventDefault();
    let record = new Record(title.value, body.value);
    records.unshift(record);
    title.value = '';
    body.value = '';
    render(records);
})