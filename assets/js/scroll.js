let btn1 = document.getElementById('home');
let btn2 = document.getElementById('why-us');
let btn3 = document.getElementById('our-service');
let btn4 = document.getElementById('testimonial');
let btn5 = document.getElementById('btn-sewa');
let btn6 = document.getElementById('faq');
let btn7 = document.getElementById('home-img');

let ef1 = document.querySelector('.greet-desc');
let ef2 = document.getElementById("our-service-greet");
let ef3 = document.getElementById('whyus');
let ef4 = document.getElementById('testi');
let ef5 = document.getElementById('sewa');
let ef6 = document.getElementById('freq');

btn1.addEventListener('click', function(){
    ef1.scrollIntoView({behavior:'smooth', block:'center'});
});

btn3.addEventListener('click', function(){
    ef2.scrollIntoView({behavior:'smooth', block:'center'});
});

btn2.addEventListener('click', function(){
    ef3.scrollIntoView({behavior:'smooth', block:'center', inline:'center'});
});

btn4.addEventListener('click', function(){
    ef4.scrollIntoView({behavior:'smooth', block:'end'});
});

btn5.addEventListener('click', function(){
    ef5.scrollIntoView({behavior:'smooth', block:'center'});
});

btn6.addEventListener('click', function(){
    ef6.scrollIntoView({behavior:'smooth', block:'nearest'});
});

btn7.addEventListener('click', function(){
    ef1.scrollIntoView({behavior:'smooth', block:'center'});
});