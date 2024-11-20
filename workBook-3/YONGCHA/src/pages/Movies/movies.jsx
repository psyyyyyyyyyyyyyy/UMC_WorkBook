import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import CardListSkeleton from '../../components/Skeleton/card-list-skeleton';
import { useGetInfiniteMovies } from '../../hooks/useGetInfiniteMovies';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import ClipLoader from "react-spinners/CircleLoader";

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

  const getCategory = (type) => {
    switch (type) {
      case 'now-playing':
        return 'now_playing';
      case 'popular':
        return 'popular';
      case 'top-rated':
        return 'top_rated';
      case 'up-coming':
        return 'upcoming';
      default:
        return 'popular';
    }
  };

  const {
    data: movies,
    isFetching,
    hasNextPage,
    isPending,
    fetchNextPage,
    isFetchingNextPage,
    isError
  } = useGetInfiniteMovies(getCategory(type));

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  // if (isPending) {
  //   return (
  //     <MovieList>
  //       <CardListSkeleton number={20} />
  //     </MovieList>
  //   );
  // }

  if (isError) return <p>Error loading movies.</p>;

  const renderMovieCard = (movie) => (
    <MovieCard key={movie.id}>
      <Link to={`/movies/${movie.id}`}>
        <MoviePoster src={`${POSTER_URL}${movie.poster_path}`} alt={movie.title} />
        <MovieInfo>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
        </MovieInfo>
      </Link>
    </MovieCard>
  );

  return (
    <>
      <MovieList>
        {movies?.pages.flatMap(page => page.results.map(renderMovieCard))}
        {isPending && <CardListSkeleton number={20}/>}
        <div ref={ref} style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', width: '100%' }}>
        {isFetching && <ClipLoader color={'#fff'} />}
      </div>
      </MovieList>
    </>
  );

}