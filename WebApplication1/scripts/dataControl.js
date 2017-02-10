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
        var serverChoice = checkRadioSelect();
        if (product === '1') {
            if (serverChoice === 'primary') {
                $('#primary1').text(server);
            } else if (serverChoice === 'secondary') {
                $('#secondary1').text(server);
            }
            
        } else if (product === '2') {
            $('#primary2').text(server);
        } else if (product === '3') {
            $('#primary3').text(server);
        } else if (product === '4') {
            $('#primary4').text(server);
        } else if (product === '5') {
            $('#primary5').text(server);
        } else if (product === '6') {
            $('#primary6').text(server);
        } else if (product === '7') {
            $('#primary7').text(server);
        } else if (product === '8') {
            $('#primary8').text(server);
        } else if (product === '9') {
            $('#primary9').text(server);
        } else if (product === '10') {
            $('#primary10').text(server);
        } else if (product === '11') {
            $('#primary11').text(server);
        } else if (product === '12') {
            $('#primary12').text(server);
        } else if (product === '13') {
            $('#primary13').text(server);
        } else if (product === '14') {
            $('#primary14').text(server);
        }

        //alert(product);
    });
    /*
    switch (product) {
        case (product === '1') {

        }
    }
    */
    function checkRadioSelect() {
        var chosenServer = $('.serverRadio').val();
        var choice;
        if (chosenServer === 'server1') {
            choice = 'primary';
        } else if (chosenServer === 'server2') {
            choice = 'secondary';
        }
        return choice;
    }
    //alert(typeof ('.statusType'));

}))();
