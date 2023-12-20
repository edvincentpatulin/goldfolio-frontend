import { url, successNotification, errorNotification } from "../utils/utils";

//Form Signup
const form_signup = document.getElementById("form_signup");

form_signup.onsubmit = async (e) => {
  e.preventDefault();

  document.querySelector("#form_signup button").disabled = true;
  document.querySelector(
    "#form_signup button"
  ).innerHTML = `<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`;

  const formData = new FormData(form_signup);

  const response = await fetch("api/profile", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  if (response.ok) {
    const json = await response.json();
    console.log(json);

    document.querySelector(".alert-success").classList.remove("d-none");
    document.querySelector(".alert-success").classList.add("d-block");

    form_signup.reset();

    successNotification("Successfully Registered Account.", 5);
  } else if (response.status == 422) {
    const json = await response.json();

    alert(json.message, 5);
  }

  document.querySelector("#form_signup button").disabled = false;
  document.querySelector("#form_signup button").innerHTML = `Create Account`;
};
