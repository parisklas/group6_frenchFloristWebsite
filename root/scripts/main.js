// Handlebars for account page: 

const context = {
    orders: [
        {
            name: 'French Kiss',
            datePurchased: 'Nov. 3, 2023',
            image: '../images/home-page1.jpg'
        },
        {
            name: 'White Orchids',
            datePurchased: 'Oct. 30, 2023',
            image: '../images/home-page1.jpg'
        }
    ]
};

const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('information').innerHTML = compiledHtml;