function setRouter() {
  const role = localStorage.getItem("role");

  switch (window.location.pathname) {
    case "/landing.html":
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
    case "/authordashboard.html":
    case "/request.html":
    case "/article.html":
    case "/authorprofile.html":
    case "/author_log.html":

    case "/management.html":
    case "/publish.html":
    case "/editor_log.html":
    case "/editorprofile.html":
    case "/editordashboard.html":
      if (!localStorage.getItem("token")) {
        window.location.pathname = "/login.html";
      }
      break;
    case "/authordashboard.html":
    case "/request.html":
    case "/article.html":
    case "/authorprofile.html":
    case "/author_log.html":
      if (!localStorage.getItem("token") || role === "Editor") {
        window.location.pathname = "/editordashboard.html";
      }
      break;
    case "/management.html":
    case "/publish.html":
    case "/editor_log.html":
    case "/editorprofile.html":
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
