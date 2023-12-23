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

//Access User Profile Information
getLoggedUserInfo();
async function getLoggedUserInfo() {
  const response = await fetch(backendUrl + "/api/profile", {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  if (response.ok) {
    const json = await response.json();
    document.getElementById("user_firstname").innerHTML = json.firstname;
    document.getElementById("user_lastname").innerHTML = json.lastname;
    document.getElementById("user_email").innerHTML = json.email;
    document.getElementById("user_student_id").innerHTML = json.student_id;
    document.getElementById("user_year_level").innerHTML = json.year_level;
    document.getElementById("user_course").innerHTML = json.course;
    document.getElementById("user_position").innerHTML = json.position;
  } else {
    const json = await response.json();
    errorNotification(json.message);
  }
}
