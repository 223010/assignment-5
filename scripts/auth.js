if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Please Login First");
  window.location.assign("/assignment-5/");
}