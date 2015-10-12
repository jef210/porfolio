(function(){

$(document).ready(function(){
    $('#programs').on('click', function(){
        alert("hello");
    });
    $('.about-section').on('click', function(){
        $('#about-text').slideToggle();

    });
});

})();