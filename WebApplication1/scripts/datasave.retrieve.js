/// <reference path="scripts/jquery-3.1.1.js"/>

// This script is meant to handle the saving and retriving of table data from the HTML page.
// Saving to a JSON file, Reading from a JSON file, then writing to tables.
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
        //var tables = ["firstProductTable", "secondProductTable"];
        // Object below contains information needed about the tables to pull data from JSON files.
        // To add a third table, must add table name & tableFilePath & add to returnFilePath() function.
        var tableInformation = {
            tables: ["firstProductTable", "secondProductTable"],
            tableFilePaths: ['scripts/JSON/newFile1.json',
                             'scripts/JSON/newFile2.json'],
            path: 0,
            primary: '#primary',
            secondary: '#secondary',
            tableNumber: '8-',
            count: "0",
            returnPrimary: function() { return this.primary + this.tableNumber + this.count },
            returnSecondary: function() { return this.secondary + this.tableNumber + this.count },
            returnFilePath: function() { return this.path === 0? this.tableFilePaths[0] : this.path === 1? this.tableFilePaths[1] : null }
        };
        for (var i = 0; i < tableInformation.tables.length; i++) {
            alert(i);
            if (tableInformation.tables[i] === "firstProductTable") {
                tableInformation.tableNumber = "0-";
                tableInformation.path = 0;
                alert(tableInformation.path);
                alert(tableInformation.tableFilePaths[0]);
                alert(tableInformation.returnFilePath());
                
            } else if(tableInformation.tables[i] === "secondProductTable") {
                tableInformation.tableNumber = "1-";
                tableInformation.path = 1;
                //alert(tableInformation.returnFilePath());
                //requestFromJSONFile();
            };
            requestFromJSONFile();
            tableInformation.count = 0;
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
        function requestFromJSONFile() {
            //alert(columnCellId.tableNumber);
            var getSavedTableJSON = new XMLHttpRequest();
            // In this future this will change the file to which we want data from
            
            getSavedTableJSON.open('GET', tableInformation.returnFilePath());
            getSavedTableJSON.onload = function() {
                var tableData = JSON.parse(getSavedTableJSON.responseText);
                $.each(tableData, function(key, value) {
                    $('#response').text(tableInformation.tableNumber);
                    $(tableInformation.returnPrimary()).text(JSON.stringify(value.primary));
                    $(tableInformation.returnSecondary()).text(JSON.stringify(value.secondary));
                    tableInformation.count++;
                });
            };
            getSavedTableJSON.send();
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