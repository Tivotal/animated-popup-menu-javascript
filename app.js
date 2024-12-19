/* Created by Tivotal */

let popup = document.querySelector(".popup");

let togglePopup = () => {
  popup.classList.toggle("show");
};

let showMessage = () => {
  popup.classList.toggle("show");
  window.alert("Account has been deactivated!");
};
