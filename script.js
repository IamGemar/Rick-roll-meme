function startScan() {
  alert("Critical error detected. Attempting recovery...");
  
  const videoContainer = document.getElementById("videoContainer");
  const video = document.getElementById("prankVideo");

  videoContainer.style.display = "block";
  video.play();
}