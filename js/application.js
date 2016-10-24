$(document).ready(function(){

    $("form").submit(function() {

        // Assign form input values to variables
        var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
        var emailAddress = $("#email-address").val();
        var phone = $("#phone").val();

        // Append table to include submitted
        // input tag values
        $("table").children("tbody").append("<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + emailAddress + "</td><td>" + phone + "</td></tr>");
        return false;
		
    });

    // Reset button
    $(document).on("click", "button", function() {
        $("table").find("tbody").remove();
        $("table").append("<tbody></tbody>");
    });
	 
	// Alert When Submitted
	$("form").submit(function(){
    alert("Thank you for Your Submission!! It will be added now");
});

});