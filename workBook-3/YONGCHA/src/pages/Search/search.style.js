import styled from 'styled-components';

const SearchContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 200px;
  background-color: #000;
  color: white;
  height: 100vh;
  width: calc(100vw - 200px);
  overflow-y: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 2%;
  width: 100%;
  height: 60px;


  input {
    width: 80%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 1px solid rgb(220,220,220);
  }

  button {
    background-color: #F82E62;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

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

const NoData = styled.h1`
  text-align: center;
  margin-top: 30px;
  color: white;
`
export { SearchContainer, SearchBox, MovieList, MovieCard, MoviePoster, MovieInfo, MovieTitle, MovieReleaseDate, NoData };
