import "./index.css";
import { renderListItem } from "./templates/render-list-item";
import { renderDetails } from "./templates/render-details";
import { apiService } from "./services/api-service";
import { TransformService } from "./services/transform-service";

const form = document.getElementById("form");
const search = document.getElementById("search-bar");
const result = document.getElementById("result");

async function searchMovie(term) {
  const data = await apiService.fetchSearch(term);
  const moviesArr = TransformService.movies(data);

  showListData(moviesArr);
}

async function getTrendsMovies() {
  const data = await apiService.fetchTrends();
  const moviesArr = TransformService.movies(data);

  showListData(moviesArr);
}

function showListData(moviesArr) {
  result.innerHTML = `
    <ul class="menu">
      ${moviesArr.map(renderListItem).join("")}
    </ul>
  `;
}

async function getMovieDetails(movieId) {
  const data = await apiService.fetchMovieById(movieId);
  const movieObj = TransformService.movie(data);

  showDetailsData(movieObj);
  getRecommendations(movieId);
}

function showDetailsData(movieObj) {
  result.innerHTML = renderDetails(movieObj);
}

async function getRecommendations(movieId) {
  const data = await apiService.fetchRecommendations(movieId);
  const moviesArr = TransformService.movies(data).slice(0, 3);

  result.insertAdjacentHTML(
    "beforeend",
    `
      <ul class="menu">
        ${moviesArr.map(renderListItem).join("")}
      </ul>
    `
  );
}

form.addEventListener("submit", event => {
  event.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    getTrendsMovies();
  } else {
    searchMovie(searchTerm);
    form.reset();
  }
});

result.addEventListener("click", event => {
  const clickedEl = event.target;

  if (clickedEl.tagName === "BUTTON") {
    const movieId = clickedEl.getAttribute("data-id");

    getMovieDetails(movieId);
  }
});

getTrendsMovies();
