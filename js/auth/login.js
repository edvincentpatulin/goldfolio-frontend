import {
  backendUrl,
  successNotification,
  errorNotification,
} from "../utils/utils.js";

//Form login
const form_login = document.getElementById("form_login");

// Variable to store the selected role
let selectedRole = null;

// Click event listener for role dropdown items
document.querySelectorAll(".role-item").forEach((item) => {
  item.addEventListener("click", function () {
    selectedRole = this.dataset.role;
    document.querySelector("#dropdownMenuButton").innerText = selectedRole;
  });
});

form_login.onsubmit = async (e) => {
  e.preventDefault();

  if (!selectedRole) {
    alert("Please select a role");
    return;
  }

  document.querySelector("#form_login button").disabled = true;
  document.querySelector(
    "#form_login button"
  ).innerHTML = `<div class="spinner-border mr-2" role="status"></div>
  <span>Loading...</span>`;

  const formData = new FormData(form_login);

  // Append the selected role to the form data
  formData.append("role", selectedRole);

  const response = await fetch(backendUrl + "/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  if (response.ok) {
    const json = await response.json();

    localStorage.setItem("token", json.token);

    form_login.reset();

    successNotification("Successfully login Account.", 3);

    window.location.pathname = "/dashboard.html";
  } else if (response.status == 422) {
    const json = await response.json();

    errorNotification(json.message, 3);
  }

  document.querySelector("#form_login button").disabled = false;
  document.querySelector("#form_login button").innerHTML = `Login`;
};
