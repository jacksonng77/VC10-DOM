(function () {

    $(document).ready(function () {
        $("#btnMultiply").bind("click", function () {
            multiply();
        });
    });

function multiply() {
    var from, result;
    $("#mybody").find("tr").remove();
    from = parseInt($("#txtFrom").val());


    for (i = 1; i <= 10; i++) {
        result = from * i;
        $("#mybody").append("<tr><td>" + from.toString() + "</td><td>" + i.toString() + "</td><td>" + result.toString() + "</td></tr>");
    }
}


})();