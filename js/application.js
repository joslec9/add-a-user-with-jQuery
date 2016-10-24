$(document).ready(function () {

    $("form").submit(function () {
        var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
        var emailAddress = $("#email-address").val();
        var phone = $("#phone").val();

        $("table").children("tbody").append("<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + emailAddress + "</td><td>" + phone + "</td></tr>");
        return false;
    });

    // Alert When Submitted
    $("form").submit(function () {
        alert("Thank you for Your Submission!! It will be added now");
    });

});