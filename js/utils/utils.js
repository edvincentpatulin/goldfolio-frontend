//Backend URL
const backendUrl =
  "https://08cf-124-105-102-243.ngrok-free.app/goldfolio-backend/public";

//Notifications
function successNotification(message, seconds) {
  const successAlert = document.querySelector(".alert-success");

  successAlert.classList.remove("d-none");
  successAlert.classList.add("d-block");
  successAlert.innerHTML = message;

  setTimeout(function () {
    successAlert.classList.add("d-none");
    successAlert.classList.remove("d-block");
  }, seconds * 1000);
}

function errorNotification(message, seconds) {
  const errorAlert = document.querySelector(".alert-danger");

  errorAlert.classList.remove("d-none");
  errorAlert.classList.add("d-block");
  errorAlert.innerHTML = message;

  setTimeout(function () {
    errorAlert.classList.add("d-none");
    errorAlert.classList.remove("d-block");
  }, seconds * 1000);
}

export { backendUrl, errorNotification, successNotification };
