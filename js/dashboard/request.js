import {
  backendUrl,
  successNotification,
  errorNotification,
} from "../utils/utils.js";

//   async function getCoverRequests() {
//     try {
//       const response = await fetch(backendUrl + "/api/cover", {
//         headers: {
//           Accept: "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const json = await response.json();

//       let tbody = json.map((request) => `
//         <tr class="border-table">
//           <td>${request.cover_request_id}</td>
//           <td>${request.title}</td>
//           <td>${request.created_at}</td>
//           <td>${request.status}</td>
//         </tr>
//       `).join('');

//       document.querySelector("#get_request tbody").innerHTML = tbody;
//     } catch (error) {
//       console.error('An error occurred while fetching the cover requests:', error);
//     }
//   }

//   function reviewRequest(coverRequestId) {
//     console.log(`Reviewing request with ID ${coverRequestId}`);
//   }

//   document.addEventListener("DOMContentLoaded", getCoverRequests);

//Logout
btn_logout.onclick = async () => {
  const response = await fetch(backendUrl + "/api/logout", {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  if (response.ok) {
    // If the status is 204, there's no need to parse the response
    if (response.status !== 204) {
      try {
        const json = await response.json();
      } catch (error) {
        console.error("Error parsing response:", error);
      }
    }

    // Clear the token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    // successNotification("Logout Successful.");

    // Redirect to the login page
    window.location.pathname = "/login.html";
  } else {
    // If the status is not ok, handle the error
    const text = await response.text();
    // errorNotification(json.message, 3);
  }
};
