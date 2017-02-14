/// <reference path="scripts/jquery-3.1.1.js"/>

$(function() {

});
function sendData() {
    $.ajax({
        type: 'POST',
        url: '../php/data.savefile.php',
        data: {
            name: "test",
            value: "test"
        },
        success: function() {
            alert('successful post');
        }
    });
};