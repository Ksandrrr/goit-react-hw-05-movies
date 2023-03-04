
import { fetchPopular } from '../../Shered/api/movies';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPopular();
        setPopularMovies(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  const element = popularMovies.map(({ id, title, name }) => {
    return (
      <li id={id}>
        <Link to={`movies/${id}`}>{title || name}</Link>
      </li>
    );
  });
  return (
    <section>
      <h1>Trending today</h1>
      <ul>
      {element}
      </ul>
    </section>
  );
};
export default HomePage;
