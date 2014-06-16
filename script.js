$(document).ready(function(){
    $('a').click(function(event){
        alert("Iiiiiintercepted!");
        event.preventDefault();
        $(this).hide('slow')
    });
    $('a').addClass('test');
});