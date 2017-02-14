
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
    //alert($('button[button-type=saveButtonTable1]'));
    //alert($('div[class=radioArea]'));
    //$('.statusType')[0].addEventListener('click', handler);
    $('.showHideButton').click(function() {
        //alert($('.showHideButton').val());
        //alert(this);
        if ($('.showHideButton').val() === 'Hide Choices') {
            $('.showHideButton').val('Show Choices');
            $('.selectionTable').hide('slow');
        } else {
            $('.showHideButton').val('Hide Choices');
            $('.selectionTable').show('slow');
        }
    });
    $('.saveButton').click(function () {
        //alert(this.id);
        var buttonId = $(this).attr('button-type');
        //var productId = 
        //alert($(this).closest('select'));
        //alert(buttonId);
        //$('#'+buttonId).click(alert("you Saved"));
        var dataSet = getData(this.id);
        //var dataSet = getData2(buttonId);
        //alert('out of function');
        //alert(dataSet.product);
        //alert(dataSet.columnChoice);
        //alert(dataSet.server);
        
        
        var AMOUNTOFPRODUCTS = 14;
        //alert(columnChoice);
        for (var i = 1; i <= AMOUNTOFPRODUCTS; i++) {
            if (dataSet.product === i.toString()) {
                //alert("This is a string" + i);
                setData(dataSet, this.id)
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
    
        
        // Storing data to the cell of which data was written to that cell.
        /*
        var cellData = $(writeToCell).data("cellInfo", { product, columnChoice, server });
        if (cellData.data("cellInfo").columnChoice === 'primary') {
            //$('body').css("background-color", "grey");
            //$(writeToCell).toggleClass('.primaryColumn');
            
            //$('.primaryColumn').toggleClass(writeToCell);
            //$(writeToCell).css("background-color", "blue");
            //alert("Change CSS to primary.");
        } else if (cellData.data("cellInfo").columnChoice ==='secondary') {
            
        }*/
        //alert(cellData.data("productInfo").columnChoice);
        /*
        if (choice === 'primary') {
            $(writeToCell).text(server);
        } else if (choice === 'secondary') {
            $('#secondary1').text(server);
        } */
}))();

function getData(buttonClicked) {
    //alert('button clicked function');
    //alert($('#serverSelect1').val());
    var dataSet = {};
    if (buttonClicked === 'saveButton1') {
        dataSet.product = $('#productSelect1').val();
        dataSet.server = $('#serverSelect1').val();
        //alert(dataSet.product);
        //alert(dataSet.server);
        dataSet.columnChoice = $(".serverRadio1:radio[name='serverSelectRadio1']:checked").val();
        //alert(dataSet.columnChoice);
        //alert(dataSet.columnChoice);
        if (dataSet.columnChoice === undefined) {
            alert("Please select primary or secondary for table 1");
        }
    } else if (buttonClicked === 'saveButton2') {
        //alert('button 2 clicked');
        dataSet.product = $('#productSelect2').val();
        dataSet.server = $('#serverSelect2').val();
        //alert(dataSet.product);
        //alert(dataSet.server);
        dataSet.columnChoice = $(".serverRadio2:radio[name='serverSelectRadio2']:checked").val();
        //alert(dataSet.columnChoice);
        if (dataSet.columnChoice === undefined) {
            alert("Please select primary or secondary for table 2");
        }
    };
    return dataSet;
};

function getData2(buttonClicked) {
    var dataSet = {};

    return dataSet;
};

function setData(dataSet, buttonClicked) {
    if (buttonClicked === 'saveButton1'){
        var writeToCell = "#" + dataSet.columnChoice + dataSet.product;
        //alert(dataSet.server);
        $(writeToCell).text(dataSet.server);
        //alert(writeToCell);
        //alert(dataSet.server.search('CSB'));
        /*
         */
        //alert($(writeToCell).attr('class'));
        $(writeToCell).removeClass();
        if (dataSet.server === 'Unknown') {
            //alert("This is unkown");
            //alert(writeToCell);
            $(writeToCell).addClass('unknown');
        } else if (dataSet.server === 'TBD') {
            $(writeToCell).addClass('tbd')
        } else if (dataSet.server.search('CSB') === 4) {
            $(writeToCell).addClass('csb');
        } else {
            if (dataSet.columnChoice === 'primary') {
                $(writeToCell).addClass('primaryColumn');
            } else if (dataSet.columnChoice === 'secondary') {
                $(writeToCell).addClass('secondaryColumn');
            };
        }
        //alert("cleared if");
    } else if (buttonClicked === 'saveButton2') {
        var writeToCell = '#' + dataSet.columnChoice + '2-' + dataSet.product;
        //alert(writeToCell);
        alert(dataSet.server);
        $(writeToCell).text(dataSet.server);
        if (dataSet.columnChoice === 'primary') {
            $(writeToCell).addClass('primaryColumn');
        } else if (dataSet.columnChoice === 'secondary') {
            $(writeToCell).addClass('secondaryColumn');
        };
    };
};
