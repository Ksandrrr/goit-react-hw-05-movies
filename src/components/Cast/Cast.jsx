import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'components/Shered/API/Movies';
import Style from './Cast.module.css';
import { Loader } from '../Shered/Loader/Loader';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCast(movieId);
        setCast([...data.cast]);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const element = cast.map(({ original_name, id, profile_path, character }) => {
    return (
      <li key={id}>
        <img
          src={`https://image.tmdb.org/t/p/original/${profile_path}`}
          alt={original_name}
          className={Style.Cast}
        />
        <p>{original_name}</p>
        <p>Character: {character}</p>
      </li>
    );
  });
  return <>{isLoading ? <Loader /> : element}</>;
};
export default Cast;
