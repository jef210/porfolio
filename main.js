(function(){

// $(document).ready(function(){
//     // close the menu on click
//     $('.nav li a').on('click', function(){
//     $('.navbar-toggle').click() 
// });
//     // Toggle the section content 
//     $('#about-text').hide();
//     $('.about-section').on('click', function(e){
//         e.preventDefault();
//         e.stopPropagation();
//         $('#about-text').fadeToggle('slow');
//     });
    
//     $('#examples-text').hide();
//     $('.examples-section').on('click', function(e){
//         e.preventDefault();
//         e.stopPropagation();
//         $('#examples-text').fadeToggle();
//     }); 
    
//     $('#what-i-do-text').hide();
//     $('.what-i-do-section').on('click', function(e){
//         e.preventDefault();
//         e.stopPropagation();
//         $('#what-i-do-text').fadeToggle();
//     }); 
    
//     $('#other-stuff-text').hide();
//     $('.other-stuff-section').on('click', function(e){
//         e.preventDefault();
//         e.stopPropagation();
//         $('#other-stuff-text').fadeToggle();
//     }); 
// $(window).scroll(function(){
//     var wScroll = $(this).scrollTop();

//     $('.jm-logo').css({
//         'transform' : 'translate(0px,  wScroll/2)'
//     });
// console.log('hi');
// });

var pContainerHeight = $('.bird-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });

  }


  // Landing Elements
  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }


  // Promoscope
  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }


  // Floating Elements

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
});




})();