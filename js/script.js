const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e)
{
    span.classList.add('animated', 'rubberBand')
}));
spans.forEach(span => span.addEventListener('mouseout', function(e){
    span.classList.remove('animated', 'rubberBand')
}));

const htmlbar = document.querySelectorAll('.bar-html');
const jsbar = document.querySelectorAll('.bar-js');
const php = document.querySelectorAll('.bar-php');
const python = document.querySelectorAll('.bar-python');
const android = document.querySelectorAll('.bar-android');

var t1 = new TimelineLite()
t1.fromTo(htmlbar, .75, {width: `calc(0% - 6px)`},{width: `calc(90% - 6px)`,ease: Power4.easeout})
    .fromTo(jsbar, .75, {width: `calc(0% - 6px)`},{width: `calc(70% - 6px)`,ease: Power4.easeout})
    .fromTo(php, .75, {width: `calc(0% - 6px)`},{width: `calc(80% - 6px)`,ease: Power4.easeout})
    .fromTo(python, .75, {width: `calc(0% - 6px)`},{width: `calc(75% - 6px)`,ease: Power4.easeout})
    .fromTo(android, .75, {width: `calc(0% - 6px)`},{width: `calc(60% - 6px)`,ease: Power4.easeout})




const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('work-category button')
    for(i = 0; i<links.length; i++){
        if(links[i].hasAttribute('class')){

            links[i].classList.remove('active')
        }
    }
    event.classList.add('active')
    const getCategory = document.querySelector(`.category-$[getId]`)
    const categories = document.querySelectorAll('div[class ^="category-"]')
    for (i = 0; i<categories.length; i++){
        if(categories[i].hasAttribute('class')){
            categories[i].classList.remove('active')
            categories[i].classList.add('hideCategory')
        }
    }
    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}
