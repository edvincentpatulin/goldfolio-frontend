import {
  backendUrl,
  successNotification,
  errorNotification,
} from "../utils/utils.js";
document.addEventListener("DOMContentLoaded", function () {
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

  if (form_login) {
    form_login.onsubmit = async (e) => {
      e.preventDefault();

      if (!selectedRole) {
        errorNotification("Please select a role", 3);
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
        localStorage.setItem("role", selectedRole);

        form_login.reset();

        successNotification("Successfully login Account.");

        if (selectedRole === "Author") {
          window.location.pathname = "/authordashboard.html";
        } else if (selectedRole === "Editor") {
          window.location.pathname = "/editordashboard.html";
        }
      } else if (response.status == 422) {
        const json = await response.json();

        errorNotification(json.message, 3);
      }

      document.querySelector("#form_login button").disabled = false;
      document.querySelector("#form_login button").innerHTML = `Login`;
    };
  }
});
