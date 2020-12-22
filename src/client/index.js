import { handleSubmit } from "./js/app.js";
import { postText } from "./js/app.js";
import { updateUI } from "./js/getData.js";
import logoIcon from "./images/logo.jpg";

var logo = document.getElementById("logo");
logo.src = logoIcon;


import "./styles/style.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/main.scss";
import "./styles/footer.scss";

export {
    handleSubmit,
    postText,
    updateUI
}
