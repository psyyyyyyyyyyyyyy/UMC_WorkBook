import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const NowContainer = styled.div`
  padding: 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
  width: 100vw;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const MovieCard = styled.div`
  background-color: #222;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom: 2px solid #ff4b5c;
  }

  h3 {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px;
    border-radius: 5px;
    color: white;
    font-size: 14px;
  }

  p {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px;
    border-radius: 5px;
    font-size: 12px;
    color: white;
  }
`;

const NowPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('YOUR_API_ENDPOINT');
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <NowContainer>
      <h1>현재 상영중인 영화</h1>
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id}>
            <img src={movie.poster_path} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </MovieCard>
        ))}
      </MovieGrid>
    </NowContainer>
  );
};

export default NowPage;
