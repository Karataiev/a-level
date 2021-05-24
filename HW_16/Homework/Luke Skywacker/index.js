"use strict";

function renderRecord(id, title, body) {
    return `
    <tr>
        <td>${id}</td>
        <td>${title}</td>
        <td>${body}</td>
    </tr>
    `;
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.onload = function () {
    const records = JSON.parse(xhr.response);
    const tbody = document.querySelector('tbody');

    let i = 1;
    for (let record of records) {
        tbody.innerHTML += renderRecord(i++, record.title, record.body);
    }
};

xhr.send();

// document.addEventListener('click', function (event) {
//     const target = event.target;
//     if (target.classList.contains('btn-delete')) {
//         target.parentNode.parentNode.remove();
//     }
// });