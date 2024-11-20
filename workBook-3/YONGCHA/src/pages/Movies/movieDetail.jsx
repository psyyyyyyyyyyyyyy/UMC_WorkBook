import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import MovieCredits from '../../components/movieCredits.jsx';
import { useGetMoviesDetail } from '../../hooks/queries/useGetMoviesDetail';


const MovieContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: ${({ backdropPath }) =>
        backdropPath
            ? `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url('https://image.tmdb.org/t/p/original${backdropPath}')`
            : 'black'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    min-height: 100vh;
    width: calc(100vw - 200px);
    overflow-y: auto;
`;

const MovieInfo = styled.div`
    display: flex;
    align-items: flex-start;
    max-width: 100%;
    text-align: left;
    padding: 50px;
    background-color: rgba(0, 0, 0, 0.6);
    gap: 50px;
`;

const MoviePoster = styled.img`
    width: 200px;
    height: auto;
    border-radius: 10px;
`;

const MovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const MovieTitle = styled.h1`
    font-size: 36px;
    margin-bottom: 2%;
    margin-top: 0;
`;

const MovieRating = styled.span`
    font-size: 18px;
    font-weight: bold;
`;

const MovieTage = styled.span`
    font-size: 18px;
    font-weight: bold;
`;

const MovieDescription = styled.p`
    font-size: 16px;
    margin-top: 15px;
`;

const MovieDetail = () => {
    const { movieId } = useParams();
    const { data: movie, isLoading, isError } = useQuery({
        queryKey: ['movieDetail', movieId],
        queryFn: () => useGetMoviesDetail({ movieId }),
        gcTime: 10000,
        staleTime: 10000,
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError || !movie) return <div>Error loading movie details.</div>;

    return (
        <MovieContainer data-backdrop-path={movie.backdrop_path}>
            <MovieInfo>
                <MoviePoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <MovieDetails>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MovieRating>평점 : {movie.vote_average}</MovieRating>
                    <p>상영시간 : {movie.runtime} 분</p>
                    <MovieTage>{movie.tagline}</MovieTage>
                    <MovieDescription>{movie.overview}</MovieDescription>
                </MovieDetails>
            </MovieInfo>
            <MovieCredits />
        </MovieContainer>
    );
};

export default MovieDetail;
