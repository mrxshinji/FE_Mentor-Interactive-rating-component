// turning button to active state
$(".btn").click(function() {
    $(".btn").removeClass("active")
    $(this).addClass("active")
})

// function to run when click submit
function getRating() {
    // get value from active state
    let rating = $(".active").attr("value")

    // if no rating is selected, alert and return
    if (rating == undefined) {
        alert("You did not select any rating")
        return
    };

    // swap display state to flip card
    $(".before").css("display", "none");
    $(".submitted").fadeIn(1000);
    $(".submitted").css("display", "flex");
    $("#ratingP").text(`You selected ${rating} out of 5`); // pass value from active state button to target #ratingP
}