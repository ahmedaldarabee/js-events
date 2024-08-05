let stars = document.querySelector("#stars1");
let moon = document.querySelector("#moon2");

let mountains3 = document.querySelector("#mountains3");
let mountains4 = document.querySelector("#mountains4");

let river = document.querySelector("#river5");
let boat6 = document.querySelector("#boat6");
let main = document.querySelector(".main");


window.onscroll = function (){
    let currentScrollValue = scrollY;

    stars.style.left = currentScrollValue + 'px';
    moon.style.top = (currentScrollValue * 2) + 'px';

    mountains3.style.top = (currentScrollValue * 1.5) + 'px';
    mountains4.style.top = (currentScrollValue * 1.2) + 'px';

    river.style.top  = currentScrollValue + 'px';
    boat6.style.left = (currentScrollValue * 3 ) + 'px';


    if(currentScrollValue >= 250) {
        main.style.background = 'linear-gradient(#10001f , #388cc8)';
    }else {
        main.style.background = 'linear-gradient(#10001f , #200016)';
    }
}