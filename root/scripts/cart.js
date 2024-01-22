
// Counter for shopping cart page: 

'use strict';

// all initial elements
const payAmountBtn = document.querySelector('#payAmount');
const decrementBtn = document.querySelectorAll('.decrement'); // Use class selector instead of ID for multiple elements
const quantityElem = document.querySelectorAll('.quantity'); // Use class selector instead of ID for multiple elements
const incrementBtn = document.querySelectorAll('.increment'); // Use class selector instead of ID for multiple elements
const priceElem = document.querySelectorAll('.price'); // Use class selector instead of ID for multiple elements
const subtotalElem = document.querySelector('#subtotal');
const taxElem = document.querySelector('#tax');
const totalElem = document.querySelector('#total');

// loop: for add event on multiple 'increment' &'decrement'
for (let i = 0; i < incrementBtn.length; i++) {
    incrementBtn[i].addEventListener('click', function () {
        let increment = Number(this.previousElementSibling.textContent);
        increment++;
        this.previousElementSibling.textContent = increment;
        totalCalc();
    });

    decrementBtn[i].addEventListener('click', function () {
        let decrement = Number(this.nextElementSibling.textContent); // Fix the typo and adjust the selector
        decrement >= 1 ? decrement-- : decrement = 0; // Fix the condition
        this.nextElementSibling.textContent = decrement;

        totalCalc();
    });
}

// function: for calculating total amount of product price
const totalCalc = function () {
    const tax = 0.05;
    let subtotal = 0;
    let totalTax = 0;
    let total = 0;

    // loop: for calculating 'subtotal' value from every single product
    for (let i = 0; i < quantityElem.length; i++) {
        subtotal += Number(quantityElem[i].textContent) * Number(priceElem[i].textContent); // Fix the typo
    }

    // show the 'subtotal' variable value on 'subtotalElem' element
    subtotalElem.textContent = subtotal.toFixed(2);

    // calculating the "totalTax"
    totalTax = subtotal * tax;

    // show the 'totalTax' on 'taxElem' element
    taxElem.textContent = totalTax.toFixed(2);

    // calculating the 'total'
    total = subtotal + totalTax; // Fix the calculation

    // show the 'total' variable value on 'totalElem' & 'payAmountBtn' element
    totalElem.textContent = total.toFixed(2);
    payAmountBtn.textContent = total.toFixed(2);
    
};