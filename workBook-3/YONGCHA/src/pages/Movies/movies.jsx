import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useCustomFetch from '../../hooks/useCustomFetch';
import { Link } from 'react-router-dom';

const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

const MovieList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-content: center;
  background-color: black;
  gap: 10px;
`;

const MovieCard = styled.div`
  background-color: black;
  border-radius: 10px;
  margin: 10px;
  height: 65%;
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const MoviePoster = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const MovieTitle = styled.span`
  font-size: 10px;
  margin-top: 10px;
  color: white;
`;

const MovieReleaseDate = styled.span`
  font-size: 8px;
  color: #888;
  display: block;
`;

export default function Movies() {
  const { type } = useParams();

  const getUrl = (type) => {
    switch (type) {
      case "now-playing":
        return `/movie/now_playing?language=ko-KR&page=1`;
      case "popular":
        return `/movie/popular?language=ko-KR&page=1`;
      case "top-rated":
        return `/movie/top_rated?language=ko-KR&page=1`;
      case "up-coming":
        return `/movie/upcoming?language=ko-KR&page=1`;
      default:
        return `/movie/popular?language=ko-KR&page=1`;
    }
  };

  const { data: movies, isLoading, isError } = useCustomFetch(getUrl(type));

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading movies.</p>;

  return (
    <MovieList>

      {movies.results && movies.results.map(movie => (
        <MovieCard key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <MoviePoster src={`${POSTER_URL}${movie.poster_path}`} alt={movie.title} />
            <MovieInfo>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
            </MovieInfo>
          </Link>
        </MovieCard>
      ))}

    </MovieList>
  );
}
