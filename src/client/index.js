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
import { precacheAndRoute, matchPrecache } from 'workbox-precaching';
import { setCatchHandler } from 'workbox-routing';

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
    // Check that service workers are supported
    if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            console.log("Installing seervice workers in production")
            navigator.serviceWorker.register('./service-worker.js');
        });
    } else {
    console.log("Service worker insallation skipped!");
    }
}

// Exporting imported js functions
export {
    handleSubmit,
    postText,
    updateUI
}
