// Interactivity for the "Listen Now" button
document.addEventListener("DOMContentLoaded", () => {
  const listenBtn = document.querySelector(".listen-btn");
  if (listenBtn) {
    listenBtn.addEventListener("click", () => {
      // Redirect user directly to Spotify playlist
      window.location.href = "https://open.spotify.com/playlist/37i9dQZF1DX6cg4h2PoN9y?si=67bce4ad69dd4d3a";
    });
  }
});
