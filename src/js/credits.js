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

import $ from "jquery";

setupButtons("#yes-btn", "happy.webp", "Cool! I hope it can help you!");
setupButtons("#no-btn", "sad.webp", "Well... nobody is perfect!");

// Function used to avoid code duplication 
function setupButtons(buttonTag, imageName, message){
  $(buttonTag).on("click", function() {
    $(".meme").attr("src", "img/gif/" + imageName);
    $(".message").text(message);
  });
}