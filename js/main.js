
//check box

$('.check-container').on('click', function () {

    var currentState = $(this).data('state');

    //this references the element that event is attacked to
    $(this).toggleClass('check-on');
    $(this).data('state', !currentState);

});


// custom slider

function showValue(newValue) {

    document.getElementById("range-one").innerHTML=newValue;
}




// second slider


var isSliderDown = false;

$(window).on('mousemove', function (evt) {

    var offsetX = evt.offsetX;

    var ratio = offsetX / 285;

    if(isSliderDown){

        if(offsetX < 285 && offsetX > 15){

            ratio = offsetX / 285;

            $('.slider-button').css({
                left:offsetX-15
            });
        }

        //max value
        if(offsetX > 285){

            $('.slider-button').css({
                left:270
        });
            ratio = 1;
         }

        //min value
        if(offsetX < 15){

            $('.slider-button').css({
                left:0
            });

            ratio = 0;
        }
        console.log(ratio);

    }else{


    }

});

$('.slider-container').on('mousedown', function () {

    isSliderDown = true;

});

$(window).on('mouseup', function () {

    isSliderDown = false;
});




// third slider

(function () {

    $("#range").slider({
        range:"min",
        max: 100,
        value: 30,
        slide:function (e,ui) {
            $("#currentVal").html(ui.value);
        }
    });
}).call(this);






















