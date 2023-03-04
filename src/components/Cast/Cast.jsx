import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  {fetchCast}  from '../../Shered/api/movies';
import Style from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCast(movieId);
        setCast([...data.cast]);
      } catch (err) {
        console.log(err);
      } finally {
      }
    };
    fetchData();
  }, [movieId]);
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
  return <>{cast.length > 0 ? element : <p>We dont have any reviews for this movie</p>}</>;
};
export default Cast;
