/// <reference path="scripts/jquery-3.1.1.js"/>


/**
    * 
    * @function document ready button click funtion
    * @description Meant to send http request when event is triggered
    * @param 
*/
$().ready(function() {
    $('#jsSubmit').click(function() {
        //alert("Clicked");
        //var table = $('#tableToSave').tableToJSON();
        //jsonTable = JSON.stringify(table);
        
        var getSavedTableJSON = new XMLHttpRequest();
        getSavedTableJSON.open('GET', 'scripts/JSON/tableData.json');
        
        /* onreadystatechange is causing the application to freeze when it didn't in the test one I have.
        getSavedTableJSON.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert("Finished")
            }
            else {
                alert(this.readyState + " " + this.status);
            }
        };
        */
        
        getSavedTableJSON.onload = function() {
                var tableData = getSavedTableJSON.responseText;
                $('#response').text((tableData));
        };
        getSavedTableJSON.send();
        alert("finished");
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