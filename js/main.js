$(document).ready(function(){

    $('#hotel-form').show();
    $('#ticket-form').hide();
    $('#place-form').hide();

    $('#hotel-item span').addClass('line');

// click on hotel
$('#hotel-item').click(function(){

    $('#hotel-form').show();
    $('#ticket-form').hide();
    $('#place-form').hide();

    $('#hotel-item span').addClass('line');
    $('#ticket-item span').removeClass('line');
    $('#place-item span').removeClass('line');

    });

// click on ticket

    $('#ticket-item').click(function(){

    $('#hotel-form').hide();
    $('#ticket-form').show();
    $('#place-form').hide();

    $('#hotel-item span').removeClass('line');
    $('#ticket-item span').addClass('line');
    $('#place-item span').removeClass('line');

    });

    //click on place
    $('#place-item').click(function(){

        $('#hotel-form').hide();
        $('#ticket-form').hide();
        $('#place-form').show();
    
        $('#hotel-item span').removeClass('line');
        $('#ticket-item span').removeClass('line');
        $('#place-item span').addClass('line');
    
        });


});
