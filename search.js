function searchMovie() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let allMovies = document.querySelectorAll(".movie-card");

  allMovies.forEach(function (card) {
    let title = card.innerText.toLowerCase();
    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}