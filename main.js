document.addEventListener('DOMContentLoaded', () => {

    const movieDatabase = [
        { id: 'the-real-hero-rey-2015', title: 'The Real Hero (Rey)', year: 2015, format: '720p HDRip', poster: 'images/the-real-hero-rey-2015.jpg' },
        // Yahan aur movies add kar sakte hain
    ];

    const moviesPerPage = 20;
    let currentPage = 1;
    let currentMovies = [...movieDatabase];

    const movieGrid = document.getElementById('movie-grid');
    const paginationContainer = document.getElementById('pagination-container');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    function displayMovies() {
        movieGrid.innerHTML = '';
        const startIndex = (currentPage - 1) * moviesPerPage;
        const endIndex = startIndex + moviesPerPage;
        const paginatedMovies = currentMovies.slice(startIndex, endIndex);

        paginatedMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
                <a href="movies/${movie.id}.html">
                    <img src="${movie.poster}" alt="${movie.title}">
                </a>
                <div class="movie-card-info">
                    <h3><a href="movies/${movie.id}.html">${movie.title} (${movie.year})</a></h3>
                    <span class="format-tag">${movie.format}</span>
                </div>
            `;
            movieGrid.appendChild(movieCard);
        });
    }

    function setupPagination() {
        paginationContainer.innerHTML = '';
        const pageCount = Math.ceil(currentMovies.length / moviesPerPage);
        for (let i = 1; i <= pageCount; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.innerText = i;
            if (i === currentPage) {
                pageLink.classList.add('active');
            }
            pageLink.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage = i;
                displayMovies();
                setupPagination();
                window.scrollTo(0, 0);
            });
            paginationContainer.appendChild(pageLink);
        }
    }

    function handleSearch(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase().trim();
        currentMovies = searchTerm === '' ? [...movieDatabase] : movieDatabase.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        currentPage = 1;
        displayMovies();
        setupPagination();
    }

    displayMovies();
    setupPagination();
    searchForm.addEventListener('submit', handleSearch);
});