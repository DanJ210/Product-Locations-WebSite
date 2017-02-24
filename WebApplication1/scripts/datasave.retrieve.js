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
            tableFilePaths: ['scripts/file1.json',
                             'scripts/file2.json'],
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
            //alert(i);
            if (tableInformation.tables[i] === "firstProductTable") {
                //alert(i);
                tableInformation.tableNumber = "0-";
                tableInformation.path = 0;
                //alert(tableInformation.path);
                //alert(tableInformation.tableNumber);
                //alert(tableInformation.tableFilePaths[0]);
                //alert(tableInformation.returnFilePath());
                requestFromJSONFile(tableInformation);
            } else if(tableInformation.tables[i] === "secondProductTable") {
                tableInformation.tableNumber = "1-";
                tableInformation.path = 1;
                //location.reload();
                //alert("second Table");
                //alert(tableInformation.returnFilePath());
                //requestFromJSONFile();
                requestFromJSONFile(tableInformation);
            };
            //alert("Test");
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
        function requestFromJSONFile(tableInformation) {
            //alert(columnCellId.tableNumber);
            var getSavedTableJSON = new XMLHttpRequest();
            // In this future this will change the file to which we want data from
            //alert(tableInformation.returnFilePath());
            //alert(tableInformation.tableNumber);
            //alert(tableInformation.path);
            getSavedTableJSON.open('GET', tableInformation.returnFilePath(), false);
            /*
                Variables of the object are being set here because for some reason they are getting
                changed before the XMLHttpRequest
            */
            var tableNumber = tableInformation.tableNumber;
            getSavedTableJSON.onreadystatechange = function() {
                if (getSavedTableJSON.readyState === 4) {
                    //alert("ready");
                    getSavedTableJSON.onload = function() {
                        var tableData = JSON.parse(getSavedTableJSON.responseText);
                        //alert(tableInformation.tableNumber);
                        //alert(tableInformation.returnPrimary());
                        $.each(tableData, function(key, value) {
                            //$('#primary0-0').text("testing");
                            $('#response').text(tableInformation.tableNumber);
                            $(tableInformation.primary + tableNumber + tableInformation.count).text(JSON.stringify(value.primary));
                            $(tableInformation.secondary + tableNumber + tableInformation.count).text(JSON.stringify(value.secondary));
                            tableInformation.count++;
                            //tableInformation.tableNumber = "0-";
                        });
                    };
                };
            };
            getSavedTableJSON.send(null);
        };
    })();
};
/* Local storage test area
(function () {
    localStorage.setItem($('#primary0-0').attr("id", "primary0-0"), "Smith");
    localStorage.firstProductTable = {
        date: "ok",
        name: "daniel"
    };
    $().ready(function() {
        $('#response').text(localStorage.getItem("primary0-0"));
        alert($('#primary0-0').attr('primary0-0'));
    });
})();
*/

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