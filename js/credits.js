$("#yes-btn").on("click", function() {
    $(".meme").attr("src", "../img/gif/happy.webp");
    $(".message").text("Cool! I hope it can help you!");
})

$("#no-btn").on("click", function() {
    $(".meme").attr("src", "../img/gif/sad.webp");
    $(".message").text("Well... nobody is perfect!");
})