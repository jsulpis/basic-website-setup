// CSS
import "../css/credits.scss";

// Javascript
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/js/dist/util.js";
import "../node_modules/bootstrap/js/dist/collapse.js";


// Font Awesome
import fontawesome from "@fortawesome/fontawesome";
import faHeart from "@fortawesome/fontawesome-free-solid/faHeart";
import faSmile from "@fortawesome/fontawesome-free-regular/faSmile";

fontawesome.library.add(faHeart, faSmile);

// Custom code
import "../img/gif/happy.webp";
import "../img/gif/sad.webp";

$("#yes-btn").on("click", function() {
    $(".meme").attr("src", "img/gif/happy.webp");
    $(".message").text("Cool! I hope it can help you!");
})

$("#no-btn").on("click", function() {
    $(".meme").attr("src", "img/gif/sad.webp");
    $(".message").text("Well... nobody is perfect!");
})