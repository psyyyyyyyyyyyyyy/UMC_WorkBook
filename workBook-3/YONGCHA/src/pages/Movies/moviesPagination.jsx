import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useCustomFetch from '../../hooks/useCustomFetch';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CardListSkeleton from '../../components/Skeleton/card-list-skeleton';

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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #000;
`;

const PaginationButton = styled.button`
  background-color: black;
  color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 10px;
  cursor: pointer;
  
  &:disabled {
    background-color: #333;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #ff4b5c;
  }
`;

const PageNumber = styled.span`
  font-size: 14px;
  color: white;
  margin: 10px;
`;


export default function Movies() {
  const { type } = useParams();
  const [page, setPage] = useState(1);

  const getUrl = (type, page) => {
    switch (type) {
      case "now-playing":
        return `/movie/now_playing?language=ko-KR&page=${page}`;
      case "popular":
        return `/movie/popular?language=ko-KR&page=${page}`;
      case "top-rated":
        return `/movie/top_rated?language=ko-KR&page=${page}`;
      case "up-coming":
        return `/movie/upcoming?language=ko-KR&page=${page}`;
      default:
        return `/movie/popular?language=ko-KR&page=${page}`;
    }
  };

  const { data: movies, isLoading, isError } = useCustomFetch(getUrl(type, page));

  if (isLoading) return <CardListSkeleton/>;
  if (isError) return <p>Error loading movies.</p>;

  const handleNextPage = () => {
    if (movies.page < movies.total_pages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
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

      <PaginationContainer>
        <PaginationButton onClick={handlePrevPage} disabled={page === 1}>
          이전
        </PaginationButton>
        <PageNumber>{page} / {movies.total_pages}</PageNumber>
        <PaginationButton onClick={handleNextPage} disabled={page === movies.total_pages}>
          다음
        </PaginationButton>
      </PaginationContainer>
    </>
  );
}