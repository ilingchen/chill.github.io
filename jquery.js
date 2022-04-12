$(document).ready(function () {
    $("#q2").hide();
    $("#q3").hide();


    $("#11option").click(function () {
        $("#11option").addClass("wrong");
        $("#q2").slideDown(1000);
        $("#q1").slideUp(500);
    });
    $("#12option").click(function () {
        $("#12option").addClass("wrong");
        $("#q2").slideDown(1000);
        $("#q1").slideUp(500);
    });
    $("#13option").click(function () {
        $("#13option").addClass("right");
        $("#q2").slideDown(1000);
        $("#q1").slideUp(500);

    });
    $("#14option").click(function () {
        $("#14option").addClass("wrong");
        $("#q2").slideDown(1000);
        $("#q1").slideUp(500);
    });

    $("#21option").click(function () {
        $("#21option").addClass("right");
        $("#q3").slideDown(1000);
        $("#q2").slideUp(500);

    });
    $("#22option").click(function () {
        $("#22option").addClass("wrong");
        $("#q3").slideDown(1000);
        $("#q2").slideUp(500);
    });
    $("#23option").click(function () {
        $("#23option").addClass("wrong");
        $("#q3").slideDown(1000);
        $("#q2").slideUp(500);
    });
    $("#24option").click(function () {
        $("#24option").addClass("wrong");
        $("#q3").slideDown(1000);
        $("#q2").slideUp(500);
    });

    $("#31option").click(function () {
        $("#31option").addClass("right");
        $("#q3").slideUp(1000);


    });
    $("#32option").click(function () {
        $("#32option").addClass("wrong");
        $("#q3").slideUp(1000);

    });
    $("#33option").click(function () {
        $("#33option").addClass("wrong");
        $("#q3").slideUp(1000);

    });
    $("#34option").click(function () {
        $("#34option").addClass("wrong");
        $("#q3").slideUp(1000);
    });


});