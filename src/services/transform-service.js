export class TransformService {
  static movies = ({ results }) => {
    return results.map(movie => ({
      id: movie.id,
      title: movie.title || movie.name
    }));
  };

  static movie = movieData => ({
    id: movieData.id,
    title: movieData.title || movieData.name,
    overview: movieData.overview,
    posterPath: `https://image.tmdb.org/t/p/w342/${movieData.poster_path}`
  });
}
