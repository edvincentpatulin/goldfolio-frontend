import { setRouter } from "../router/router.js";
//Set Router
setRouter();

//Backend URL
const backendUrl =
  "https://08cf-124-105-102-243.ngrok-free.app/goldfolio-backend/public";

//Access User Profile
// getLoggedUser();
// async function getLoggedUser() {
//   const response = await fetch(backendUrl + "/api/profile", {
//     headers: {
//       Accept: "application/json",
//       Authorization: "Bearer " + localStorage.getItem("token"),
//     },
//   });

//   if (response.ok) {
//     const json = await response.json();
//     document.getElementById("user_logged").innerHTML =
//       json.firstname + " " + json.lastname;

//     if (document.getElementById("author_id")) {
//       document.getElementById("author_id").value = json.author_id;
//     }
//   } else {
//     const json = await response.json();
//     errorNotification(json.message);
//   }
// }

//Notifications
function successNotification(message, seconds = 0) {
  const successAlert = document.querySelector(".alert-success");

  successAlert.classList.remove("d-none");
  successAlert.classList.add("d-block");
  successAlert.innerHTML = message;

  if (seconds != 0) {
    setTimeout(function () {
      successAlert.classList.add("d-none");
      successAlert.classList.remove("d-block");
    }, seconds * 1000);
  }
}

function errorNotification(message, seconds = 0) {
  const errorAlert = document.querySelector(".alert-danger");

  errorAlert.classList.remove("d-none");
  errorAlert.classList.add("d-block");
  errorAlert.innerHTML = message;

  if (seconds != 0) {
    setTimeout(function () {
      errorAlert.classList.add("d-none");
      errorAlert.classList.remove("d-block");
    }, seconds * 1000);
  }
}

export { backendUrl, errorNotification, successNotification };
