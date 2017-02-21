/// <reference path="scripts/jquery-3.1.1.js"/>

// Function that writes data to the table when button is clicked
// Need to change this to work when the page is first loaded or refreshed.
$(document).ready(function() {
    $('#jsSubmit').click(function() {
        writeTableData();
    });
});

/**
    * 
    * @function document ready button click funtion
    * @description Sends http request when event is triggered to GET data from JSON file.
    * @param 
*/
function writeTableData() {
        //alert("Clicked");

        var tables = ["firstProductTable", "secondProductTable"];
        for (var i = 0; i < tables.length; i++) {
            if (i === 0) {
                var tableNumber = null;
                requestFromJSONFile(tableNumber);
            } else if(i === 1) {
                var tableNumber = "2-";
                requestFromJSONFile(tableNumber);
            };
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
        function requestFromJSONFile(tableNumber) {
            var getSavedTableJSON = new XMLHttpRequest();
            // In this future this will change the file to which we want data from
            if (tableNumber === null) {
                getSavedTableJSON.open('GET', 'scripts/JSON/newTableData.json');
            } else {
                getSavedTableJSON.open('GET', 'scripts/JSON/newTableData.json');
            };
            
            getSavedTableJSON.onload = function() {
                var tableData = JSON.parse(getSavedTableJSON.responseText);
                //$('#response').text(JSON.stringify(tableData));
                //$('#primary1').text((JSON.stringify(tableData[0].server2)));

                // Variable to control which TD element gets the data
                var count = 0;
                //sendDataToCell(getSavedTableJSON, tableNumber);
                $.each(tableData, function(key, value) {
                    if (tableNumber === null) {
                        $('#primary'  + count).text(JSON.stringify(tableData[key].primary));
                        $('#secondary'  +  count).text(JSON.stringify(tableData[key].secondary));
                        count++;
                    } else if(tableNumber === "2-") {
                        $('#primary'  + tableNumber + count).text(JSON.stringify(tableData[key].primary));
                        $('#secondary'  + tableNumber +  count).text(JSON.stringify(tableData[key].secondary));
                        count++;
                    };
                });
            };
            getSavedTableJSON.send();
            alert("finished");
        };
        function sendDataToCell(getSavedTableJSON, tableNumber) {

        }
                /*
            if (tableNumber === null) {
                
            } else if(tableSelect === "2-") {
                getSavedTableJSON.open('GET', 'scripts/JSON/newTableData.json');
                getSavedTableJSON.onload = function() {
                    var tableData = JSON.parse(getSavedTableJSON.responseText);
                    $('#response').text(JSON.stringify(tableData));
                    //$('#primary1').text((JSON.stringify(tableData[0].server2)));

                    // Variable to control which TD element gets the data
                    var count = 0;
                    $.each(tableData, function(key, value) {
                        $('#primary' + tableSelect + count).text(JSON.stringify(tableData[key].primary));
                        $('#secondary' + tableSelect + count).text(JSON.stringify(tableData[key].secondary));
                        count++;
                    });
                };
            };
            */
        
        
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
    
};

// Creating JSON string out of the table, trying to save it to a file
$().ready(function() {
    $('#jsGet').click(function() {
        // Was using these two lines to create JSON string out of the HTML table.
        var table = $('#firstProductTable').tableToJSON();
        jsonTable = JSON.stringify(table);
        alert(jsonTable);

        var table2 = $('#firstProductTable').tableToJSON();
        alert(JSON.stringify(table2));
        /*
        var sendTableDataJSON = new XMLHttpRequest();
        sendTableDataJSON.open('POST', 'scripts/JSON/newTableData.json');
        sendTableDataJSON.send(jsonTable);
        */
    });
});


/**
 * 
 * 
 * @param {getting table data in JSON form from tableToJSON} table
 */
function sendData(table) {
    //alert(table);
    //alert(JSON.stringify(table));
    
};