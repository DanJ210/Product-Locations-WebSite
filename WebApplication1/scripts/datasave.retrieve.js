/// <reference path="scripts/jquery-3.1.1.js"/>

// Function that writes data to the table when button is clicked
// Need to change this to work when the page is first loaded or refreshed.
/**
    * @function document ready button click function
    * @description Sends http request when event is triggered to GET data from JSON file.
    * @param 
*/
$().ready(function() {
    $('#jsGet').click(function() {
        getDataModule();
    });
});

// This button function sends the data to the page to be saved.
// Need to have this happen upon every choice
$().ready(function() {
    $('#jsSubmit').click(function () {
        SendDataModule();
    });
});
/**
 * @description This variable is meant to be a module that's called when an event happens
 * like refresh or save of some kind. Gets data from JSON files and loads them to the tables.
 */
var getDataModule = function() {
    (function writeTableData() {
        var tables = ["firstProductTable", "secondProductTable"];
        var tableNumber;
        var cellIdString;
        var columnCellId = {
            primary: '#primary',
            secondary: '#secondary',
            tableNumber: '0-',
            count: "0",
            returnPrimary: function() { return this.primary + this.tableNumber + this.count },
            returnSecondary: function() { return this.secondary + this.tableNumber + this.count }
        };
        for (var i = 0; i < tables.length; i++) {
            if (tables[i] === "firstProductTable") {
                columnCellId.tableNumber = "0-";
                alert("first table");
                requestFromJSONFile(columnCellId);
            } else if(tables[i] === "secondProductTable") {
                columnCellId.tableNumber = "1-";
                alert("Second Table");
                requestFromJSONFile(columnCellId);
            };
            //alert("Requesting JSON");
        };
        
        // onreadystatechange is causing the application to freeze when it didn't in the test one I have.
        /*
        getSavedTableJSON.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert("Finished")
            }
            else {
                alert(this.readyState + " " + this.status);
            }
        };
        */
        function requestFromJSONFile(columnCellId) {
            alert("insdie request")
            var getSavedTableJSON = new XMLHttpRequest();
            // In this future this will change the file to which we want data from
            if (columnCellId.tableNumber === "0-") {
                getSavedTableJSON.open('GET', 'scripts/JSON/newTableData.json');
            } else if (columnCellId.tableNumer === "1-") {
                getSavedTableJSON.open('GET', 'scripts/JSON/newTableData.json');
            };
            
            getSavedTableJSON.onload = function() {
                var tableData = JSON.parse(getSavedTableJSON.responseText);
                //$('#response').text(JSON.stringify(tableData));
                //$('#primary1').text((JSON.stringify(tableData[0].server2)));

                // Variable to control which TD element gets the data
                var count = 0;
                //sendDataToCell(getSavedTableJSON, tableNumber);
                $.each(tableData, function(value, key) {
                    //alert("Running .each");
                    if (columnCellId.tableNumber === "0-") {
                        //columnCellId.primary = '#primaryTest';
                        //columnId_Secondary = '#primary' + count;
                        
                        //alert(columnCellId.primary);
                        //alert(columnCellId.returnPrimary());
                        //writeToCell(tableData, columnCellId, key, value);
                        //alert(cellIdString);
                        
                        //$(columnCellId.returnPrimary()).text(JSON.stringify(tableData[value].primary));
                        //$(columnCellId.returnSecondary()).text(JSON.stringify(tableData[value].secondary));
                        alert("Each");
                        count++;
                    } /*else if(columnCellId.tableNumber === "1-") {
                        //columnId_Primary = '#primary' + tableNumber + count;
                        //columnId_Secondary = '#secondary' + tableNumber + count;
                        //writeToCell(tableData, columnCellId, key, value);
                        /*
                        $('#primary'  + tableNumber + count).text(JSON.stringify(tableData[value].primary));
                        $('#secondary'  + tableNumber +  count).text(JSON.stringify(tableData[value].secondary));
                        
                        count++;
                    };*/
                });
            };
            getSavedTableJSON.send();

            function writeToCell(tableData, columnCellId, key, value) {
                //alert(columnCellId.returnPrimary());
                //$(columnCellId.primary).text(JSON.stringify(tableData[value].primary));
                //$(columnCellId.secondary).text(JSON.stringify(tableData[value].secondary));
            };
        };
    })();
};

(function () {
    
});
// Creating a module variable that stores the function to POST data to a JSON file
// Trying to keep it as private and secure as possible.
var SendDataModule = function () {
// Was using these two lines to create JSON string out of the HTML table.
    var table = $('#firstProductTable').tableToJSON();
    jsonTable = JSON.stringify(table);
    alert(jsonTable);

    var table2 = $('#secondProductTable').tableToJSON();
    alert(JSON.stringify(table2));
    /*
    var sendTableDataJSON = new XMLHttpRequest();
    sendTableDataJSON.open('POST', 'scripts/JSON/newTableData.json');
    sendTableDataJSON.send(jsonTable);
    */
    /*
    var getSavedTableJSON = new XMLHttpRequest();
    getSavedTableJSON.open('GET', 'scripts/JSON/tableData.json');
    getSavedTableJSON.onload = function() {
        var tableData = JSON.parse(getSavedTableJSON.responseText);
        $('#primary1').text((JSON.stringify(tableData[0].server2)));
    };
    getSavedTableJSON.send();
    alert("finished");
    */
};

/* Old AJAX data that is working, but replacing with XMLHttpRequest
    alert("clicked");
    $.ajax({
        url: "scripts/test.php",
        type: "POST",
        data: {message: "test"},
        dataType: "JSON",
        
        success: function(jsonStr) {
            $('#result').text(JSON.stringify(jsonStr));
        }
    });
    alert("Finished");
    */