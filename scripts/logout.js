logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.assign("/assignment-5/");
});