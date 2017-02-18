/// <reference path="scripts/jquery.tabletojson.min.js"/>
/// <reference path="jquery-3.1.1.js"/>
/// <reference path="datasave.retrieve.js"/>
// The above clode blew my mind, never knew 3 slashes existed to where you
// could reference a JS file like that to use jQuery in an external JS file.
// Below here is a working main with jQuery functioning.

$().ready(function() {
    //alert("Starting");
    // Long way of even listening below here.
    /*
    $('.statusType')[0];
    
    var handler = function () {
        alert("Clicked! Heck yes!");
    }
    */

    //var table = $('tableToSave').tableToJSON();
    //alert(JSON.stringify(table));
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
// Practice code using AJAX to send to php file

    $('.saveButton').click(function () {
        
    
        //sendData(table);
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
    });
    // Was making a JSON object of data if I needed it, not complete
    var products = {
        "NEXT.coderedweb.com": 1,
        "demo.coderedweb.com": 2,
    };
    
    // A function that takes all the selected values and turns it into
    // a string id of a cell to pass to a jquery string that determines
    // which cell to write the data to.
});

/**
 * @function
 * @description
 * @param {any} buttonClicked
 * @returns {dataSet} object containing all table cell data.
 */
function getData(buttonClicked) {
    //alert('button clicked function');
    //alert($('#serverSelect1').val());
    var dataSet = {};
    if (buttonClicked === 'saveButton1') {
        dataSet.product = $('#productSelect1').val();
        dataSet.server = $('#serverSelect1').val();
        dataSet.columnChoice = $(".serverRadio1:radio[name='serverSelectRadio1']:checked").val();
        dataSet.writeToCell = "#" + dataSet.columnChoice + dataSet.product;
        if (dataSet.columnChoice === undefined) {
            alert("Please select primary or secondary for table 1");
        }
    } else if (buttonClicked === 'saveButton2') {
        //alert('button 2 clicked');
        dataSet.product = $('#productSelect2').val();
        dataSet.server = $('#serverSelect2').val();
        dataSet.columnChoice = $(".serverRadio2:radio[name='serverSelectRadio2']:checked").val();
        dataSet.writeToCell = '#' + dataSet.columnChoice + '2-' + dataSet.product;
        if (dataSet.columnChoice === undefined) {
            alert("Please select primary or secondary for table 2");
        }
    };
    return dataSet;
};

/**
 * @function
 * @description
 * @param {dataSet} dataSet
 * @param {buttonClicked} buttonClicked
 */
function setData(dataSet, buttonClicked) {
    if (buttonClicked === 'saveButton1'){
        $(dataSet.writeToCell).text(dataSet.server);
        setCellColor(dataSet);
    } else if (buttonClicked === 'saveButton2') {
        $(dataSet.writeToCell).text(dataSet.server);
        setCellColor(dataSet);
    };
};
/**
 * @function
 * @description
 * @param {dataSet} dataSet
 */
function setCellColor(dataSet) {
    $(dataSet.writeToCell).removeClass();
    if (dataSet.server === 'Unknown') {
        //alert("This is unkown");
        //alert(writeToCell);
        $(dataSet.writeToCell).addClass('unknown');
    } else if (dataSet.server === 'TBD') {
        $(dataSet.writeToCell).addClass('tbd')
    } else if (dataSet.server.search('CSB') === 4) {
        $(dataSet.writeToCell).addClass('csb');
    } else {
        if (dataSet.columnChoice === 'primary') {
            $(dataSet.writeToCell).addClass('primaryColumn');
        } else if (dataSet.columnChoice === 'secondary') {
            $(dataSet.writeToCell).addClass('secondaryColumn');
        };
    };
};
