import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
`

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
    const [movies, setMovies] = useState([]);
    const { type } = useParams();
    console.log(type);
    
    
    useEffect(()=>{
        let url = "";
        switch (type) {
          case "now-playing":
            url = `https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1`;
            break;
          case "popular":
            url = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`;
            break;
          case "top-rated":
            url = `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1`;
            break;
          case "up-coming":
            url = `https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1`;
            break;
          default:
            url = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`;
        }
      
        axios.get(url, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTNkYWIyMDkxMzI2Y2Y3NTkwNTAwYjQyODNkNjZkNyIsIm5iZiI6MTcyNjE0MTU3Ny42MDM2ODcsInN1YiI6IjY0MzVmY2Y2NjUxZmNmMDBkM2RhYzNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cFPsPRHPidq2OnJ3U-3wHJYhnGajDFqUsM8XJ_a_0bw`
          }
        })
        .then((res)=>{
          console.log(res.data);
          setMovies(res.data.results);
        })
        .catch(err => console.error(err));
      }, [type])
      
  return (
    <MovieList>
      {movies&&movies.map(movie => (
        <MovieCard key={movie.id}>
          <MoviePoster src={`${POSTER_URL}${movie.poster_path}`} alt={movie.title} />
          <MovieInfo>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
          </MovieInfo>
        </MovieCard>
      ))}
    </MovieList>
  );
}