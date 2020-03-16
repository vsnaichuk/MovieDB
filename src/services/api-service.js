class ApiService {
  constructor() {
    this.apiURL = "https://api.themoviedb.org/3";
    this.apiKEY = "a01ee6a52b3a6c1876c2c149fcc557ef";
  }

  async fetchTrends() {
    try {
      return await fetch(
        `${this.apiURL}/trending/movie/week?api_key=${this.apiKEY}`
      ).then(data => data.json());
    } catch (erorr) {
      console.error(erorr);
    }
  }

  async fetchMovieById(movieId) {
    try {
      return await fetch(
        `${this.apiURL}/movie/${movieId}?api_key=${this.apiKEY}`
      ).then(data => data.json());
    } catch (erorr) {
      console.error(erorr);
    }
  }

  async fetchRecommendations(movieId) {
    try {
      return await fetch(
        `${this.apiURL}/movie/${movieId}/recommendations?api_key=${this.apiKEY}`
      ).then(data => data.json());
    } catch (erorr) {
      console.error(erorr);
    }
  }

  async fetchSearch(term) {
    try {
      return await fetch(
        `${this.apiURL}/search/movie?api_key=${this.apiKEY}&query=${encodeURI(
          term
        )}`
      ).then(data => data.json());
    } catch (erorr) {
      console.error(erorr);
    }
  }
}

export const apiService = new ApiService();
