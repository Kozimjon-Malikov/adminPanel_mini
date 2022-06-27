let navigation=document.querySelector('.navigation');
let main=document.querySelector('.main');
let toggle=document.querySelector('.toggle');
toggle.onclick=function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}