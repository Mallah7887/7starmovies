
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const movies = document.querySelectorAll(".movie-card");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    movies.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? "block" : "none";
    });
  });
});
