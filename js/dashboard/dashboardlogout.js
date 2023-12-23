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

    // Redirect to the login page
    window.location.pathname = "/login.html";
  } else {
    // If the status is not ok, handle the error
    const text = await response.text();
  }
};
