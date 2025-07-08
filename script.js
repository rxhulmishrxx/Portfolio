window.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");

  // Check if splash has already been shown in this session
  if (sessionStorage.getItem("splashShown")) {
    if (splash) splash.style.display = "none";
  } else {
    sessionStorage.setItem("splashShown", "true");
    // Let your CSS animation play normally
  }
});
