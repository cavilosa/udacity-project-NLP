import { handleSubmit } from "./js/app.js";
import { postText } from "./js/app.js";
import { updateUI } from "./js/getData.js";
import logoIcon from "./images/logo.jpg"; // Logo from inages

var logo = document.querySelector("#logo"); // Find a place to insert the img
logo.src = logoIcon; // Define the image's src


// Imporrting styles
import "./styles/style.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/main.scss";
import "./styles/footer.scss";

// Exporting imported js functions
export {
    handleSubmit,
    postText,
    updateUI
}
