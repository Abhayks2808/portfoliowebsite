//nav menu toggler
$(document).ready(function(){
  $('.menu-toggler').on('click',function(){
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open')
  })
  $('.top-nav .nav-links').on('click',function(){
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open')
  })
  $('.top-nav .nav-links').on('click',function(){
    $('html ,body').animate({
         scrollTop:$($(this).attr('href')).offset().top - 100
    },2000)
  })
  $('#up').on('click',function(){
    $('html ,body').animate({
         scrollTop:0
    },2000)
  })
  AOS.init({
    easing:'ease',
    duration:1000
  })
})


//skills automatic carasoul
let skillindex=0;
showskillset();
function showskillset(){
 let chageskill=document.getElementsByClassName('skillchange');
 for(let i=0;i<chageskill.length;i++){
     chageskill[i].style.display="none"
 }
 skillindex++;
 if(skillindex > chageskill.length){
   skillindex=1;
 }
 chageskill[skillindex-1].style.display="block";
 setTimeout(showskillset,1000)
}

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);



  