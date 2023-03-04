import { useEffect, useState } from 'react';
import { fetchSearchMovies } from '../../Shered/api/movies';
import { Link } from 'react-router-dom';
const MoviesPage = () => {
  const [search, setSearch] = useState(``);
  const [item, setItem] = useState([]);
  const [notFound, setNotFound] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setNotFound(false);
      try {
        const data = await fetchSearchMovies(search);
        setItem(data.results);
        if (data.results.length === 0) {
          setNotFound(true);
        }
      } catch (err) {
      }
    };
    if (search) {
      fetchData();
    }
  }, [search]);

  const handleSearch = e => {
    e.preventDefault();
    setSearch(e.target.elements.search.value);
  };
  const element = item.map(({ title, id, release_date }) => {
    return (
      <li key={id}>
        <Link to={`${id}`}>{`${title} (${release_date.slice(0, 4)})`}</Link>
      </li>
    );
  });
  return (
    <section>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {notFound ? <h3>Not Found</h3> : element}
      </ul>
    </section>
  );
};
export default MoviesPage;
