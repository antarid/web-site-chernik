$(document).ready(function(){
  
   $("#anim-text").typed({
    strings: ["Andrei Taranov", "A bit of animation" , "Absolute and relative positioning" , "Поставьте зачет"],
    typeSpeed: 7,
    backDelay: 900,
    backSpeed: 1,
    loop: true,
    startDelay: 1
  });
  
  let header = document.getElementsByTagName('header')[0];
  window.onscroll = () => {
    let h =  window.pageYOffset;
    if(h>100)
      header.classList.add('active');
    else  
      header.classList.remove('active');
  }
});