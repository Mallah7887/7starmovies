document.addEventListener('DOMContentLoaded', () => {

    // --- MOVIE DATABASE ---
    // To add a new movie, just add a new object to this array.
    // Make sure the 'id' is unique and the 'poster' path is correct.
    const movieDatabase = [
        { id: 'kalki-2898-ad', title: 'Kalki 2898 AD', year: 2024, format: '1080p HDRip', poster: 'images/movie1.jpg' },
        { id: 'mufasa-the-lion-king', title: 'Mufasa: The Lion King', year: 2024, format: '720p WEB-DL', poster: 'images/movie2.jpg' },
        { id: 'a-quiet-place-day-one', title: 'A Quiet Place: Day One', year: 2024, format: '1080p BluRay', poster: 'images/movie3.jpg' },
        { id: 'inside-out-2', title: 'Inside Out 2', year: 2024, format: '720p HDRip', poster: 'images/movie4.jpg' },
        { id: 'bad-boys-ride-or-die', title: 'Bad Boys: Ride or Die', year: 2024, format: '1080p HDRip', poster: 'images/movie5.jpg' },
        { id: 'kingdom-of-the-planet-of-the-apes', title: 'Kingdom of the Planet of the Apes', year: 2024, format: '1080p WEB-DL', poster: 'images/movie6.jpg' },
        { id: 'godzilla-x-kong-the-new-empire', title: 'Godzilla x Kong: The New Empire', year: 2024, format: '1080p BluRay', poster: 'images/movie7.jpg' },
        { id: 'dune-part-two', title: 'Dune: Part Two', year: 2024, format: '4K UHD', poster: 'images/movie8.jpg' },
        { id: 'kung-fu-panda-4', title: 'Kung Fu Panda 4', year: 2024, format: '720p HDRip', poster: 'images/movie9.jpg' },
        { id: 'the-garfield-movie', title: 'The Garfield Movie', year: 2024, format: '1080p WEB-DL', poster: 'images/movie10.jpg' },
        { id: 'furiosa-a-mad-max-saga', title: 'Furiosa: A Mad Max Saga', year: 2024, format: '1080p HDRip', poster: 'images/movie11.jpg' },
        { id: 'the-fall-guy', title: 'The Fall Guy', year: 2024, format: '1080p BluRay', poster: 'images/movie12.jpg' },
        { id: 'challengers', title: 'Challengers', year: 2024, format: '720p WEB-DL', poster: 'images/movie13.jpg' },
        { id: 'civil-war', title: 'Civil War', year: 2024, format: '1080p HDRip', poster: 'images/movie14.jpg' },
        { id: 'abigail', title: 'Abigail', year: 2024, format: '1080p BluRay', poster: 'images/movie15.jpg' },
        { id: 'monkey-man', title: 'Monkey Man', year: 2024, format: '1080p WEB-DL', poster: 'images/movie16.jpg' },
        { id: 'ghostbusters-frozen-empire', title: 'Ghostbusters: Frozen Empire', year: 2024, format: '720p HDRip', poster: 'images/movie17.jpg' },
        { id: 'road-house', title: 'Road House', year: 2024, format: '1080p WEB-DL', poster: 'images/movie18.jpg' },
        { id: 'article-370', title: 'Article 370', year: 2024, format: '1080p HDRip', poster: 'images/movie19.jpg' },
        { id: 'shaitaan', title: 'Shaitaan', year: 2024, format: '720p WEB-DL', poster: 'images/movie20.jpg' },
        { id: 'fighter', title: 'Fighter', year: 2024, format: '1080p HDRip', poster: 'images/movie21.jpg' },
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
            
            // Note: The movie detail page name is generated from the 'id'.
            // e.g., id 'kalki-2898-ad' links to 'movies/kalki-2898-ad.html'
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
                window.scrollTo(0, 0); // Scroll to top on page change
            });
            paginationContainer.appendChild(pageLink);
        }
    }

    function handleSearch(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase().trim();

        if (searchTerm === '') {
            currentMovies = [...movieDatabase];
        } else {
            currentMovies = movieDatabase.filter(movie => 
                movie.title.toLowerCase().includes(searchTerm)
            );
        }
        
        currentPage = 1; // Reset to first page for new search results
        displayMovies();
        setupPagination();
    }

    // Initial load
    displayMovies();
    setupPagination();

    // Event Listeners
    searchForm.addEventListener('submit', handleSearch);
    // Optional: Real-time search as user types
    // searchInput.addEventListener('keyup', handleSearch);

});