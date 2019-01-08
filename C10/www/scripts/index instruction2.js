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

        $("#result").empty();

        var htmlstring;

        for (var i = 1; i <= 10; i++) {
            result = from * i;
            htmlstring = "<a href='#' class='ui-btn' id='btn_" + i + "'>" + from.toString() + "x" + i.toString() + "</a>";

            $("#result").append(htmlstring);

            $("#btn_" + i).bind("click", {id: result}, function (event) {
                var data = event.data;
                alert(data.id);
            });
        }
    }


})();
