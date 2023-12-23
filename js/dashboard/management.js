import {
  backendUrl,
  successNotification,
  errorNotification,
} from "../utils/utils.js";

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
// $(document).ready(function () {
//   // Initialize DataTables
//   var tableAll = $("#dataTableAll").DataTable();
//   var tableApproved = $("#dataTableApproved").DataTable();
//   var tableDenied = $("#dataTableDenied").DataTable();
//   var tableRevision = $("#dataTableRevision").DataTable();

//   // Filter data based on tab click
//   $("button.mytab").on("click", function () {
//     var status = $(this).data("status");
//     filterTable(status);
//   });

//   // Function to filter tables
//   function filterTable(status) {
//     tableAll.rows().search("").draw();
//     tableApproved.rows().search("").draw();
//     tableDenied.rows().search("").draw();
//     tableRevision.rows().search("").draw();

//     if (status !== "all") {
//       tableAll
//         .rows(':not([data-status="' + status + '"])')
//         .remove()
//         .draw();
//       tableApproved
//         .rows(':not([data-status="' + status + '"])')
//         .remove()
//         .draw();
//       tableDenied
//         .rows(':not([data-status="' + status + '"])')
//         .remove()
//         .draw();
//       tableRevision
//         .rows(':not([data-status="' + status + '"])')
//         .remove()
//         .draw();
//     }
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  // Variable to store the selected action
  let selectedAction = null;

  // Click event listener for action dropdown items
  document.querySelectorAll(".action-item").forEach((item) => {
    item.addEventListener("click", function () {
      selectedAction = this.innerText;
      document.querySelector("#dropdownActionButton").innerText =
        selectedAction;

      // Assuming you have this code to append 'action' to formData
      formData.set("action", selectedAction);
    });
  });
});
