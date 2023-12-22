import {
  backendUrl,
  successNotification,
  errorNotification,
} from "../utils/utils.js";

// Function to get the user's authentication token (implement according to your authentication mechanism)
// function getUserAuthToken() {
//   // Replace this with your actual implementation
//   return localStorage.getItem("token"); // Example assuming the token is stored in local storage
// }

// async function getArticle() {
//   const authToken = getUserAuthToken();

//   if (!authToken) {
//     // Handle the case where the user is not authenticated
//     console.error("User not authenticated");
//     return;
//   }

//   const response = await fetch(backendUrl + "/api/article", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       Authorization: `Bearer ${authToken}`, // Include the user's token in the request headers
//     },
//   });

//   if (response.ok) {
//     const json = await response.json();

//     if (json.length > 0) {
//       const article = json[0]; // Assuming you want the first article, adjust as needed

//       // Update title
//       document.querySelector('#user-form-modal [name="title"]').innerText =
//         article.title;

//       // Update content
//       document.querySelector('#user-form-modal [name="content"]').innerText =
//         article.content;

//       // Update file
//       const fileField = document.querySelector(
//         '#user-form-modal [name="file"]'
//       );
//       fileField.innerHTML = `<img src="${article.file}" alt="">`;

//       // Display the modal
//       $("#user-form-modal").modal("show");
//     }
//   } else {
//     // Handle the case where the request was not successful
//     console.error("Failed to fetch article:", response.statusText);
//   }
// }

// backendUrl + "/api/cover"
async function getCoverRequests() {
  const response = await fetch(backendUrl + "/api/cover", {
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    const json = await response.json();

    let tbody = "";
    json.forEach((request) => {
      tbody += `
          <tr class="border-table">
            <td>${request.cover_request_id}</td>
            <td>${request.title}</td>
            <td>${request.created_at}</td>
            <td>${request.status}</td>
            
          </tr>
        `;
    });

    document.querySelector("#get_request tbody").innerHTML = tbody;
  }
}

// Function to handle reviewing a request
function reviewRequest(coverRequestId) {
  // Add your logic to handle reviewing a request based on the coverRequestId
  console.log(`Reviewing request with ID ${coverRequestId}`);
}

// Fetch cover requests when the page loads
document.addEventListener("DOMContentLoaded", getCoverRequests);
