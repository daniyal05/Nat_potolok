new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3000,

  }
});

Fancybox.bind('[data-fancybox="gallery"]',{

});


$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#back-to-top').fadeIn();
 
} else {
 
$('#back-to-top').fadeOut();
 
}
 
});
 
$('#back-to-top').click(function() {
 
$('body,html').animate({scrollTop:0},100);
 
});
 
});