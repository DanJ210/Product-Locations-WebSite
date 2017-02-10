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
        var product = $('#productSelect').val();
        var server = $('.server').val();
        var columnChoice = $("input.serverRadio:radio[name='serverSelect']:checked").val();
        var AMOUNTOFPRODUCTS = 14;
        //alert(columnChoice);
        for (var i = 1; i <= AMOUNTOFPRODUCTS; i++) {
            if (product === i.toString()) {
                //alert("This is a string" + i);
                setData(product, columnChoice, server)
            }
        }
        /* The old way that I originally started writing this logic... WOW...
        Replaced by above
        if (product === '1') {
            //alert(server);
            setData(columnChoice, server);
            
        } else if (product === '2') {
            setData(columnChoice, server);
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
        }*/
    });
    // Was making a JSON object of data if I needed it, not complete
    var products = {
        "NEXT.coderedweb.com": 1,
        "demo.coderedweb.com": 2,
    };
    // A function that takes all the selected values and turns it into
    // a string id of a cell to pass to a jquery string that determines
    // which cell to write the data to.
    function setData(product, columnChoice, server) {
        var writeToCell = "#" + columnChoice + product;
        $(writeToCell).text(server);
        // Storing data to the cell of which data was written to that cell.
        var cellData = $(writeToCell).data("cellInfo", { product, columnChoice, server });
        if (cellData.data("cellInfo").columnChoice === 'primary') {
            //$('body').css("background-color", "grey");
            //$(writeToCell).toggleClass('.primaryColumn');
            $(writeToCell).addClass('primaryColumn');
            //$('.primaryColumn').toggleClass(writeToCell);
            //$(writeToCell).css("background-color", "blue");
            //alert("Change CSS to primary.");
        } else if (cellData.data("cellInfo").columnChoice == 'secondary') {
            $(writeToCell).addClass('secondaryColumn');
        }
        
        //alert(cellData.data("productInfo").columnChoice);
        /*
        if (choice === 'primary') {
            $(writeToCell).text(server);
        } else if (choice === 'secondary') {
            $('#secondary1').text(server);
        } */
    };
}))();
