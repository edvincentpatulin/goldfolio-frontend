import {
  backendUrl,
  successNotification,
  errorNotification,
} from "../utils/utils.js";

//Form Signup
const form_signup = document.getElementById("form_signup");

form_signup.onsubmit = async (e) => {
  e.preventDefault();

  document.querySelector("#form_signup button").disabled = true;
  document.querySelector(
    "#form_signup button"
  ).innerHTML = `<div class="spinner-border mr-2" role="status"></div>
<span>Loading...</span>`;

  const formData = new FormData(form_signup);

  const response = await fetch(backendUrl + "/api/profile", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  if (response.ok) {
    const json = await response.json();

    form_signup.reset();

    successNotification("Successfully Registered Account.", 5);
  } else if (response.status == 422) {
    const json = await response.json();

    alert(json.message, 5);
  }

  document.querySelector("#form_signup button").disabled = false;
  document.querySelector("#form_signup button").innerHTML = `Create Account`;
};
