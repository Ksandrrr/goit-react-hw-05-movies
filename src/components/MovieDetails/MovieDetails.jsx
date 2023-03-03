import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieID } from 'components/Shered/API/Movies';
import Style from './MovieDetails.module.css';
const MovieDetails = () => {
  const [image, setImage] = useState(``);
  const [title, setTitle] = useState(``);
  const [overview, setOverview] = useState(``);
  const [genres, setGenres] = useState(``);
  const [average, setAverage] = useState(0);

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieID(movieId);
        setImage(data.poster_path);
        setTitle(data.title);
        setOverview(data.overview);
        setGenres([...data.genres]);
        setAverage(data.vote_average.toFixed(1));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [movieId]);

  const goBack = () => navigate(from);

  const genresValue =
    Array.isArray(genres) && genres.map(({ name }) => name).join(`, `);

  return (
    <>
      <section>
        <button onClick={goBack}>Go Back</button>
        <ul className={Style.list}>
          <li>
            <img
              src={`https://image.tmdb.org/t/p/original/${image}`}
              alt={title}
            />
          </li>
          <li>
            <h3>{title}</h3>
            <p>Vote average {average}/10</p>

            <h4>Ovirview</h4>
            <p>{overview}</p>

            <h5>Genres</h5>
            <p>{genresValue}</p>
          </li>
        </ul>
        <ul className={Style.Cast}>
          <h4 className={Style.title}>Additial Information</h4>
          <li>
            <Link to="cast">Genres</Link>
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
