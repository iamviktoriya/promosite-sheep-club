// document.addEventListener("DOMContentLoaded", function() {
//     let menu = document.querySelector('.menu');
//     let menuburger = document.querySelector('.menuburger');
    
//     menu.addEventListener('click', function(){
//         menu.classList.toggle('active');
//         menuburger.classList.toggle('active');
//     })
// });
$(document).ready(function() {
    
  $(function(){
    $(".back").click(function() {
      window.history.back();
    })
  })

  // появление анимированных объектов при наведении
  // главная
  $('.item1').mouseover(function() {
    $('.heartmenu2').show(200);
  });
  $('.item1').mouseleave(function() {
    $('.heartmenu2').hide(200);
  });
  $('.item1').mouseover(function() {
    $('.sheepmenu').show(200);
  });
  $('.item1').mouseleave(function() {
    $('.sheepmenu').hide(200);
  });
  // события
  $('.item2').mouseover(function() {
    $('.flowmenu').show(200);
  });
  $('.item2').mouseleave(function() {
    $('.flowmenu').hide(200);
  });

  $('.item2').mouseover(function() {
    $('.poster1menu').show(200);
  });
  $('.item2').mouseleave(function() {
    $('.poster1menu').hide(200);
  });

  $('.item2').mouseover(function() {
    $('.poster2menu').show(200);
  });
  $('.item2').mouseleave(function() {
    $('.poster2menu').hide(200);
  });
  // интерьер
  $('.item3').mouseover(function() {
    $('.flowmenu2').show(200);
  });
  $('.item3').mouseleave(function() {
    $('.flowmenu2').hide(200);
  });
  $('.item3').mouseover(function() {
    $('.minisheephouse1').show(200);
  });
  $('.item3').mouseleave(function() {
    $('.minisheephouse1').hide(200);
  });
  $('.item3').mouseover(function() {
    $('.minisheephouse2').show(200);
  });
  $('.item3').mouseleave(function() {
    $('.minisheephouse2').hide(200);
  });
  // магазин
  $('.item4').mouseover(function() {
    $('.heartmenu').show(200);
  });
  $('.item4').mouseleave(function() {
    $('.heartmenu').hide(200);
  });
  $('.item4').mouseover(function() {
    $('.cupmenu').show(200);
  });
  $('.item4').mouseleave(function() {
    $('.cupmenu').hide(200);
  });
  $('.item4').mouseover(function() {
    $('.bagmenu').show(200);
  });
  $('.item4').mouseleave(function() {
    $('.bagmenu').hide(200);
  });
  // статьи
  $('.item5').mouseover(function() {
    $('.flowmenu3').show(200);
  });
  $('.item5').mouseleave(function() {
    $('.flowmenu3').hide(200);
  });
  $('.item5').mouseover(function() {
    $('.sheepmenu1').show(200);
  });
  $('.item5').mouseleave(function() {
    $('.sheepmenu1').hide(200);
  });
  $('.item5').mouseover(function() {
    $('.sheepmenu2').show(200);
  });
  $('.item5').mouseleave(function() {
    $('.sheepmenu2').hide(200);
  });

  });