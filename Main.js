// Movie Data (This would normally come from an API or JSON file)
const movies = [
    {
        id: 1,
        title: "Wednesday (2025)",
        thumbnail: "images/posters/wednesday-2025.jpg",
        quality: "1080p WEB-DL",
        size: "1.8 GB",
        language: "Dual Audio [Hindi-English]",
        link: "movies/wednesday-2025.html"
    },
    {
        id: 2,
        title: "Pathaan (2023)",
        thumbnail: "images/posters/pathaan.jpg",
        quality: "720p HDRip",
        size: "1.2 GB",
        language: "Hindi",
        link: "movies/pathaan.html"
    },
    {
        id: 3,
        title: "KGF Chapter 2 (2022)",
        thumbnail: "images/posters/kgf2.jpg",
        quality: "1080p BluRay",
        size: "2.5 GB",
        language: "Dual Audio [Hindi-Tamil]",
        link: "movies/kgf-chapter-2.html"
    },
    {
        id: 4,
        title: "Avatar: The Way of Water (2022)",
        thumbnail: "images/posters/avatar2.jpg",
        quality: "4K HDR",
        size: "4.7 GB",
        language: "English",
        link: "movies/avatar-2.html"
    },
    {
        id: 5,
        title: "Brahmāstra (2022)",
        thumbnail: "images/posters/brahmastra.jpg",
        quality: "1080p WEB-DL",
        size: "2.1 GB",
        language: "Hindi",
        link: "movies/brahmastra.html"
    },
    {
        id: 6,
        title: "Vikram (2022)",
        thumbnail: "images/posters/vikram.jpg",
        quality: "720p HDRip",
        size: "1.5 GB",
        language: "Tamil",
        link: "movies/vikram.html"
    },
    {
        id: 7,
        title: "RRR (2022)",
        thumbnail: "images/posters/rrr.jpg",
        quality: "1080p BluRay",
        size: "3.2 GB",
        language: "Dual Audio [Hindi-Telugu]",
        link: "movies/rrr.html"
    },
    {
        id: 8,
        title: "The Kashmir Files (2022)",
        thumbnail: "images/posters/kashmir-files.jpg",
        quality: "720p HDRip",
        size: "1.1 GB",
        language: "Hindi",
        link: "movies/kashmir-files.html"
    },
    {
        id: 9,
        title: "Kantara (2022)",
        thumbnail: "images/posters/kantara.jpg",
        quality: "1080p WEB-DL",
        size: "1.9 GB",
        language: "Kannada",
        link: "movies/kantara.html"
    },
    {
        id: 10,
        title: "Drishyam 2 (2022)",
        thumbnail: "images/posters/drishyam2.jpg",
        quality: "720p HDRip",
        size: "1.3 GB",
        language: "Hindi",
        link: "movies/drishyam-2.html"
    },
    {
        id: 11,
        title: "Black Panther: Wakanda Forever (2022)",
        thumbnail: "images/posters/black-panther2.jpg",
        quality: "1080p WEB-DL",
        size: "2.4 GB",
        language: "English",
        link: "movies/black-panther-2.html"
    },
    {
        id: 12,
        title: "Top Gun: Maverick (2022)",
        thumbnail: "images/posters/top-gun.jpg",
        quality: "4K HDR",
        size: "5.1 GB",
        language: "English",
        link: "movies/top-gun-maverick.html"
    },
    {
        id: 13,
        title: "Bhool Bhulaiyaa 2 (2022)",
        thumbnail: "images/posters/bhool-bhulaiyaa2.jpg",
        quality: "720p HDRip",
        size: "1.4 GB",
        language: "Hindi",
        link: "movies/bhool-bhulaiyaa-2.html"
    },
    {
        id: 14,
        title: "Joker (2019)",
        thumbnail: "images/posters/joker.jpg",
        quality: "1080p BluRay",
        size: "2.3 GB",
        language: "English",
        link: "movies/joker.html"
    },
    {
        id: 15,
        title: "Avengers: Endgame (2019)",
        thumbnail: "images/posters/endgame.jpg",
        quality: "4K HDR",
        size: "5.5 GB",
        language: "English",
        link: "movies/avengers-endgame.html"
    },
    {
        id: 16,
        title: "Interstellar (2014)",
        thumbnail: "images/posters/interstellar.jpg",
        quality: "1080p BluRay",
        size: "3.0 GB",
        language: "English",
        link: "movies/interstellar.html"
    },
    {
        id: 17,
        title: "The Dark Knight (2008)",
        thumbnail: "images/posters/dark-knight.jpg",
        quality: "4K Remastered",
        size: "4.2 GB",
        language: "English",
        link: "movies/dark-knight.html"
    },
    {
        id: 18,
        title: "Inception (2010)",
        thumbnail: "images/posters/inception.jpg",
        quality: "1080p BluRay",
        size: "2.8 GB",
        language: "English",
        link: "movies/inception.html"
    },
    {
        id: 19,
        title: "The Shawshank Redemption (1994)",
        thumbnail: "images/posters/shawshank.jpg",
        quality: "1080p Remastered",
        size: "2.1 GB",
        language: "English",
        link: "movies/shawshank-redemption.html"
    },
    {
        id: 20,
        title: "Pulp Fiction (1994)",
        thumbnail: "images/posters/pulp-fiction.jpg",
        quality: "1080p Remastered",
        size: "2.0 GB",
        language: "English",
        link: "movies/pulp-fiction.html"
    },
    {
        id: 21,
        title: "Fight Club (1999)",
        thumbnail: "images/posters/fight-club.jpg",
        quality: "4K Remastered",
        size: "3.5 GB",
        language: "English",
        link: "movies/fight-club.html"
    },
    {
        id: 22,
        title: "The Godfather (1972)",
        thumbnail: "images/posters/godfather.jpg",
        quality: "1080p Remastered",
        size: "2.4 GB",
        language: "English",
        link: "movies/godfather.html"
    },
    {
        id: 23,
        title: "The Matrix (1999)",
        thumbnail: "images/posters/matrix.jpg",
        quality: "4K HDR",
        size: "4.0 GB",
        language: "English",
        link: "movies/matrix.html"
    },
    {
        id: 24,
        title: "Parasite (2019)",
        thumbnail: "images/posters/parasite.jpg",
        quality: "1080p BluRay",
        size: "2.2 GB",
        language: "Korean",
        link: "movies/parasite.html"
    },
    {
        id: 25,
        title: "Dune (2021)",
        thumbnail: "images/posters/dune.jpg",
        quality: "4K HDR",
        size: "4.8 GB",
        language: "English",
        link: "movies/dune.html"
    }
];

// DOM Elements
const movieGrid = document.getElementById('movieGrid');
const pagination = document.getElementById('pagination');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Pagination Variables
const moviesPerPage = 20;
let currentPage = 1;
let filteredMovies = [...movies];

// Display Movies
function displayMovies(moviesToDisplay, page) {
    movieGrid.innerHTML = '';
    
    const startIndex = (page - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const paginatedMovies = moviesToDisplay.slice(startIndex, endIndex);
    
    if (paginatedMovies.length === 0) {
        movieGrid.innerHTML = '<p class="no-results">No movies found. Try a different search.</p>';
        return;
    }
    
    paginatedMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <div class="movie-thumbnail">
                    <img src="${movie.thumbnail}" alt="${movie.title}">
                </div>
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <span class="quality">${movie.quality}</span>
                </div>
            </a>
        `;
        movieGrid.appendChild(movieCard);
    });
}

// Setup Pagination
function setupPagination(moviesToPaginate, page) {
    pagination.innerHTML = '';
    const pageCount = Math.ceil(moviesToPaginate.length / moviesPerPage);
    
    if (pageCount <= 1) return;
    
    // Previous Button
    if (page > 1) {
        const prevLink = document.createElement('a');
        prevLink.href = '#';
        prevLink.textContent = '«';
        prevLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = page - 1;
            displayMovies(filteredMovies, currentPage);
            setupPagination(filteredMovies, currentPage);
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
        pagination.appendChild(prevLink);
    }
    
    // Page Numbers
    for (let i = 1; i <= pageCount; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        if (i === page) {
            pageLink.className = 'active';
        }
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            displayMovies(filteredMovies, currentPage);
            setupPagination(filteredMovies, currentPage);
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
        pagination.appendChild(pageLink);
    }
    
    // Next Button
    if (page < pageCount) {
        const nextLink = document.createElement('a');
        nextLink.href = '#';
        nextLink.textContent = '»';
        nextLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = page + 1;
            displayMovies(filteredMovies, currentPage);
            setupPagination(filteredMovies, currentPage);
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
        pagination.appendChild(nextLink);
    }
}

// Search Functionality
function searchMovies(query) {
    if (query.trim() === '') {
        filteredMovies = [...movies];
    } else {
        filteredMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(query.toLowerCase())
        );
    }
    currentPage = 1;
    displayMovies(filteredMovies, currentPage);
    setupPagination(filteredMovies, currentPage);
}

// Event Listeners
searchBtn.addEventListener('click', () => {
    searchMovies(searchInput.value);
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchMovies(searchInput.value);
    }
});

// Initial Load
displayMovies(filteredMovies, currentPage);
setupPagination(filteredMovies, currentPage);