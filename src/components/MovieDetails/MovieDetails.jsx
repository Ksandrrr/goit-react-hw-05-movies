import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieID } from '../../Shered/api/movies';
import Style from './MovieDetails.module.css';
const MovieDetails = () => {

  const [movieDetails, setMovieDetails] = useState([])

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieID(movieId);
        setMovieDetails(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [movieId]);

  const goBack = () => navigate(from);

  const genresValue =
    Array.isArray(movieDetails.genres) && movieDetails.genres.map(({ name }) => name).join(`, `);
const voteAverage = movieDetails.vote_average ? movieDetails.vote_average.toFixed(1) : '';
  return (
    <>
      <section>
        <button onClick={goBack}>Go Back</button>
        <ul className={Style.list}>
          <li>
            <img
              src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          </li>
          <li>
            <h3>{movieDetails.title}</h3>
            <p>Vote average {voteAverage}/10</p>

            <h4>Ovirview</h4>
            <p>{movieDetails.overview}</p>

            <h5>Genres</h5>
            <p>{genresValue}</p>
          </li>
        </ul>
        <ul className={Style.Cast}>
          <h4 className={Style.title}>Additial Information</h4>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <ul>
          <Outlet />
        </ul>
      </section>
    </>
  );
};
export default MovieDetails;
