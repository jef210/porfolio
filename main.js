(function(){

$(document).ready(function(){
    // Toggle the section content 
    $('#about-text').hide();
    $('.about-section').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#about-text').fadeToggle('slow');
    });
    
    $('#examples-text').hide();
    $('.examples-section').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#examples-text').fadeToggle();
    }); 
    
    $('#what-i-do-text').hide();
    $('.what-i-do-section').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#what-i-do-text').fadeToggle();
    }); 
    
    $('#other-stuff-text').hide();
    $('.other-stuff-section').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#other-stuff-text').fadeToggle();
    }); 


});

})();