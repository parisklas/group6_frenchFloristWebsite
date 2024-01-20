// jQuery for Home Page

$(document).ready(function(){
    $('.fadeIn').fadeIn(3500);
});

// Toggle NavBar
$(document).ready(function(){
  $('.header-open > a').click(function() {
    $('.hamburger-menu').addClass('active');
    $('.showNav').hide();
  });

  $('.closeNav').click(function() {
    $('.hamburger-menu').removeClass('active');
    $('.showNav').show();
  });

});

// Search Bar

$(function(){
   $('#search').click(function() {
       $('.searchBar').toggle()
                      .focus();
   });
});














// Handlebars for account page:

const context = {
    orders: [
        {
            name: 'French Beginnings',
            datePurchased: 'Jan. 3, 2024',
            image: '../images/orders1.jpg'
        },
        {
            name: 'White Orchids',
            datePurchased: 'Nov. 30, 2023',
            image: '../images/orders2.jpg'
        },
        {
            name: 'Hello Fall',
            datePurchased: 'Sept. 23, 2023',
            image: '../images/orders3.jpg'

        }

    ]
};

const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('information').innerHTML = compiledHtml;


// Counter for shopping cart page: 

'use strict';

// all initial elements
const payAmountBtn=document.querySelector('#payAmount');
const decrementBtn=document.querySelectorAll('#decrement');
const quantityElem=document.querySelectorAll('#quantity');
const incrementBtn=document.querySelectorAll('#increment');
const priceElem=document.querySelectorAll('#price');
const subtotalElem=document.querySelector('#subtotal');
const taxElem=document.querySelector('#tax');
const totalElem=document.querySelector('#total');

// loop:  for add event on ultiple 'increment' &'decrement'  
for ( let i = 0; i < incrementBtn.length; i++ ) {
    incrementBtn[i].addEventListener('click', function (){
      // collect the value of 'quantity' textContent,
     // based on clicked 'increment' button sibiling.
    let increment = Number(this.previousElementSibling.textContent);    
      //plus 'increment'  variable value on 'quantity' element
        increment++;
        
      // show the 'increment'variable value on 'quantity' element
       // based on clicked 'increment' button sibling.
        this.previousElementSibling.textContent = increment;
        
        totalCalc();
        
    });
    
    decrementBtn[i].addEventListener('click', function(){
      // collect the value of 'quantity' textContent,
     // based on clicked 'decrement' button sibiling.
      let decrement = Number(this.previousElementSibling.textContent); // minus 'decrement' variable value by 1 based on condition
        decrement ≥ 1 ? : decrement--;
     // show the 'decrement'variable value on 'quantity' element
     // based on clicked 'decrement' button sibling.
       this.previousElementSibling.textContent = decrement; 
        
       totalCalc();
    });
    
}
        
        
        //function: for calculating total amount of product price
     const totalCalc =function(){
      // declare all initial variable
        const tax = 0.05;
        let subtotal = 0;
        let totalTax = 0;
        let total = 0;
        
        // loop: for calculating 'subtotal' value from every single product 
        for ( let i = 0; i < quantityElem.length; i++ ){
        
        subtotal += Number(quantityElem[i],textContent)*Number(priceElem[i].textContent); 
    }
        // show the 'subtotal' variable value on 'subtotalElem' element
        subtotalElem.textContent = subtotal.toFixed(2);
        
        //calculating the "totalTax'
        totalTax = subtotal * tax;
        
        //show the 'totalTax' on 'taxElem' element
        taxElem.textContent = totalTax.toFixed(2);
        
        //calculating the 'total'
        total = subtotal * totalTax;
        
        //show the 'total'variable value on 'totalElem' & 'payAmountBtn' element
        totalElem.textContent = total.toFixed(2);
        payAmountBtn.textContent = total.toFixed(2);
    }   
        
    
