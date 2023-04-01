$(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop()>300){
           $('#scrollUp').fadeIn();
        }else{
           $('#scrollUp').fadeOut();
        }
     });
});// jQ
const header = document.getElementById('header');


const trans = document.getElementsByClassName('trans');

function transPage(n){
    for(let i = 0 ; i < trans.length ; i++){
        trans[i].classList.remove('active');
    };
    trans[n].classList.add('active');
    switch(n){
        case 0 : window.scrollTo({top:0, behavior:'smooth'})
        break;
        
    }
}

function scrollUp(){
    window.scrollTo({top:0, behavior: 'smooth'});
}

function hambOn(){
    const hamb = document.getElementById('hamb');
    hamb.classList.toggle('act');
}