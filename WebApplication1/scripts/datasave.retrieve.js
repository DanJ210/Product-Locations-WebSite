/// <reference path="scripts/jquery-3.1.1.js"/>
alert("Second file");
$().ready(function() {
    $('#jsSubmit').click(function() {
        var table = $('#tableToSave').tableToJSON();
        jsonTable = JSON.stringify(table);
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
    });
});
$('#jsSubmit').click(function() {
    alert("clicked")
});

function sendData(table) {
    //alert(table);
    //alert(JSON.stringify(table));
    
};