/// <reference path="jquery-3.1.1.js"/>
// The above clode blew my mind, never knew 3 slashes existed to where you
// could reference a JS file like that to use jQuery in an external JS file.


// Below here is a working main with jQuery functioning.
($(function main() {
    //alert("Starting");
    // Long way of even listening below here.
    /*
    $('.statusType')[0];

    var handler = function () {
        alert("Clicked! Heck yes!");
    }
    */
    //$('.statusType')[0].addEventListener('click', handler);

    $('#saveButton').click(function () {
        //alert("You double clicked!");
        $('.statusType').text();
        var product = $('#productSelect').val();
        var server = $('.server').val();

        if (product === '1') {
            server = $('.server').val();
            $('#1').text(server);
        } else {
            server = $('.server').val();
            $('#2').text(server);
        }
        //alert(product);
     });

    //alert(typeof ('.statusType'));

}))();
