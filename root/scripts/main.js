// jQuery for Home Page

$(document).ready(function(){
    $('.fadeIn').fadeIn(3500);
}); // This fades in the "Welcome to French Florist" 

// Toggle NavBar
$(document).ready(function(){
  $('.header-open > a').click(function() {
    $('.hamburger-menu').addClass('active');
    $('.showNav').hide();
  }); // This is the functionality to open the nav menu when the hamburger icon is clicked

  $('.closeNav').click(function() {
    $('.hamburger-menu').removeClass('active');
    $('.showNav').show();
  }); // This is the functionality to close the nav menu when the X icon is clicked
});

// Search Bar

$(function(){
   $('#search').click(function() {
       $('.searchBar').toggle()
                      .focus();
   }); // This is the functionality to toggle the Search bar on and off when the magnifying glass is clicked
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
}; // This handlebars code allows me to dynamically manipulate the "orders" screen without using HTML. 

const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('information').innerHTML = compiledHtml;
