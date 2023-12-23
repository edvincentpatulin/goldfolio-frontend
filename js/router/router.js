function setRouter() {
  const role = localStorage.getItem("role");

  switch (window.location.pathname) {
    case "/":
    case "/login.html":
    case "/signup.html":
      if (localStorage.getItem("token") != null) {
        if (role === "Author") {
          window.location.pathname = "/authordashboard.html";
        } else if (role === "Editor") {
          window.location.pathname = "/editordashboard.html";
        }
      }
      break;
    case "/request.html":
    case "/article.html":
    case "/management.html":
    case "/authorprofile.html":
    case "/editordashboard.html":
    case "/authordashboard.html":
      if (!localStorage.getItem("token")) {
        window.location.pathname = "/login.html";
      }
      break;
    case "/request.html":
    case "/article.html":
    case "/authordashboard.html":
      if (!localStorage.getItem("token") || role === "Editor") {
        window.location.pathname = "/editordashboard.html";
      }
      break;
    case "/management.html":
    case "/editordashboard.html":
      if (!localStorage.getItem("token") || role === "Author") {
        window.location.pathname = "/authordashboard.html";
      }
      break;

    default:
      break;
  }
}

export { setRouter };
