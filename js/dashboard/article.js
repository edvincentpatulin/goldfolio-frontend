import {
  backendUrl,
  successNotification,
  errorNotification,
} from "../utils/utils.js";

// Create Article
const create_article = document.getElementById("create_article");

// // Function to show the Bootstrap toast
// function showToast(message, seconds, toastColor) {
//   const toastContainer = document.getElementById("toastPlacement");
//   const toast = new bootstrap.Toast(toastContainer.querySelector(".toast"));

//   // Update the toast content
//   toastContainer.querySelector(".toast-body").innerHTML = message;

//   // Apply the specified toast color
//   toastContainer
//     .querySelector(".toast")
//     .classList.remove("bg-success", "bg-danger");
//   toastContainer.querySelector(".toast").classList.add(toastColor);

//   // Show the toast
//   toast.show();

//   // Hide the toast after the specified duration
//   setTimeout(() => {
//     toast.hide();
//   }, seconds * 1000);
// }

create_article.onsubmit = async (e) => {
  e.preventDefault();

  document.querySelector("#create_article #button_article").disabled = true;
  document.querySelector(
    "#create_article #button_article"
  ).innerHTML = `<div class="spinner-border mr-2" role="status"></div>
    <span>Loading...</span>`;

  const formData = new FormData(create_article);

  console.log([...formData.entries()]);

  const response = await fetch(backendUrl + "/api/article", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  if (response.ok) {
    const json = await response.json();

    create_article.reset();

    document.querySelector("#create_article #button_article").disabled = false;
    document.querySelector(
      "#create_article #button_article"
    ).innerHTML = `Submit`;

    // showToast("Successfully Created Article.", 3, "bg-success"); // Green color toast
    successNotification("Successfully Created Article.", 3);
  } else if (response.status == 422) {
    const json = await response.json();
    console.error(json);
    errorNotification(json.message, 3);
    // showToast(json.message, 3, "bg-danger"); // Red color toast

    document.querySelector("#create_article #button_article").disabled = false;
    document.querySelector(
      "#create_article #button_article"
    ).innerHTML = `Submit`;
  }
};
