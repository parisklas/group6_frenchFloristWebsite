// jQuery for Home Page

$(document).ready(function(){
    $('.fadeIn').fadeIn(3500);
});

// Toggle NavBar
$(document).ready(function(){
  $(".header-open > a").click(function() {
    $(".hamburger-menu").addClass("active");
  });

  $(".closeNav").click(function() {
    $(".hamburger-menu").removeClass("active");
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


// 