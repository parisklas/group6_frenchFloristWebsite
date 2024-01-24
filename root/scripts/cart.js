
// Counter for shopping cart page: 

'use strict';

// all initial elements
const payAmountBtn = document.querySelector('#payAmountBtn');
const decrementBtn = document.querySelectorAll('.decrement');
const quantityElem = document.querySelectorAll('.quantity');
const incrementBtn = document.querySelectorAll('.increment');
const priceElem = document.querySelectorAll('.product-price');
const subtotalElem = document.querySelector('.subtotal-amount');
const taxElem = document.querySelector('.tax-amount');
const totalElem = document.querySelector('#totalElem');
const closeBtns = document.querySelectorAll('.product-close-btn'); // Added closeBtns

// loop: for add event on multiple 'increment' &'decrement'
for (let i = 0; i < incrementBtn.length; i++) {
    incrementBtn[i].addEventListener('click', function () {
        let increment = Number(this.previousElementSibling.textContent);
        increment++;
        this.previousElementSibling.textContent = increment;
        totalCalc();
    });

    decrementBtn[i].addEventListener('click', function () {
        let decrement = Number(this.nextElementSibling.textContent);
        decrement >= 1 ? decrement-- : decrement = 0;
        this.nextElementSibling.textContent = decrement;

        totalCalc();
    });

    // Add event listener for close button
    closeBtns[i].addEventListener('click', function () {
        removeCartItem(i);
        totalCalc();
    });
}

// function: for removing item from the cart
const removeCartItem = function (index) {
    // Remove the entire product-card div
    const productCard = quantityElem[index].closest('.product-card');
    productCard.remove();
};

// function: for calculating total amount of product price
const totalCalc = function () {
    const tax = 0.05;
    let subtotal = 0;
    let totalTax = 0;
    let total = 0;

    // loop: for calculating 'subtotal' value from every single product
    for (let i = 0; i < quantityElem.length; i++) {
        subtotal += Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);
    }

    // show the 'subtotal' variable value on 'subtotalElem' element
    subtotalElem.textContent = subtotal.toFixed(2);

    // calculating the "totalTax"
    totalTax = subtotal * tax;

    // show the 'totalTax' on 'taxElem' element
    taxElem.textContent = totalTax.toFixed(2);

    // calculating the 'total'
    total = subtotal + totalTax;

    // show the 'total' variable value on 'totalElem' & 'payAmountBtn' element
    totalElem.textContent = total.toFixed(2);

    // Remove the amount from 'payAmountBtn' without including the total amount
    payAmountBtn.textContent = 'Continue to pay';
};

// Initial call to set the initial values
totalCalc();
