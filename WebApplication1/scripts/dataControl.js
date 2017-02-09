/// <reference path="jquery-3.1.1.js"/>
// The above clode blew my mind, never knew 3 slashes existed to where you
// could reference a JS file like that to use jQuery in an external JS file.


// Below here is a working main with jQuery functioning.
($(function main() {
    alert("Starting");
    
    document.getElementsByClassName('statusType').addEventListener('click', function (ev) {
        this; //-> element with id "statusType"
    }, false);
    
    var handler = function (ev) {
        console.log('clicked!');
        alert("Clicked!");
    };

    var statusType = document.getElementsByClassName('statusType');

    statusType.addEventListener('click', handler, false);

    statusType.removeEventListener('click', handler, false);
}))();
