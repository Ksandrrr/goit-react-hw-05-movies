import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/Shered/API/Movies';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchReviews(movieId);
        setReviews([...data.results]);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const element = reviews.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <h5>{author}</h5>
        <p>{content}</p>
      </li>
    );
  });

  return (
    <>
      {reviews.length > 0 ? (
        element
      ) : (
        <p>We dont have any reviews for this movie</p>
      )}
    </>
  );
};
export default Reviews;
