// CSS
import "../scss/credits.scss";

// Javascript
// JQuery is loaded in util.js
import "bootstrap/js/src/util.js";
import "bootstrap/js/src/collapse.js";


// Font Awesome
import fontawesome from "@fortawesome/fontawesome";
import faHeart from "@fortawesome/fontawesome-free-solid/faHeart";
import faSmile from "@fortawesome/fontawesome-free-regular/faSmile";

fontawesome.library.add(faHeart, faSmile);

// Custom code
import "../img/gif/happy.webp";
import "../img/gif/sad.webp";

import $ from 'jquery';

$("#yes-btn").on("click", function() {
    $(".meme").attr("src", "img/gif/happy.webp");
    $(".message").text("Cool! I hope it can help you!");
})

$("#no-btn").on("click", function() {
    $(".meme").attr("src", "img/gif/sad.webp");
    $(".message").text("Well... nobody is perfect!");
})