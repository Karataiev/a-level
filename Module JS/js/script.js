"use strict";

async function getResponse() {
    let response = await fetch('http://127.0.0.1:5500/Module%20JS/fetch.html');
    let content = await response.json();

    let key;

    let list = document.querySelector('.list_menu')

    for (key in content) {
        list.innerHTML += `
            <li class="list" data-id="${content[key].id}">
                <div class="text1">${content[key].name}</div>
                <hr class="hr1">
                <div class="text2">${content[key].price}</div>
                <button class="product__btn" data-id="${content[key].id}">Add</button> 
            </li>`
    };

    let list2 = document.querySelector('.cart-content__list')

    for (key in content) {
        list2.innerHTML += `
            <li class="list2" data-id="${content[key].id}">
                <div class="text_1">${content[key].name}</div>
                <div class="text_2">${content[key].price}</div>
                <button class="btn-delete" data-id="${content[key].id}">Del</button> 
            </li> 
            `
    };

    let cart = content;

    document.onclick = (event) => {
        if (event.target.classList.contains('product__btn')) {
            plusFunction(event.target.dataset.id);
        }
    }

    const plusFunction = (id) => {
        cart[id]++;
        renderCart();
    }

    const renderCart = () => {
        console.log(cart);
    }

    renderCart()
    
}

getResponse();




// document.addEventListener('click', function (event) {
//     const target = event.target;

//     if (target.classList.contains('btn-delete')) {
//         target.parentNode.remove();
//     }
// });