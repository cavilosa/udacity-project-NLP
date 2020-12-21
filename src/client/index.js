import { handleSubmit } from "./js/app.js";
import { postText } from "./js/getAPI.js";
import { updateUI } from "./js/getData.js";
import logoIcon from "./images/logo.jpg";
import gearIcon from "./images/gear.png";

var logo = document.getElementById("logo");
logo.src = logoIcon;

var gear = document.querySelector("#gear");
gear.src = gearIcon;


import "./styles/style.scss";

export {
    handleSubmit,
    postText,
    updateUI
}
