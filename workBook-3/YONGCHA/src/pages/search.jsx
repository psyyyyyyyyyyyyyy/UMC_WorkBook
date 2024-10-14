import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  padding: 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
  width: 100vw;
`;

const Search = () => {
    return (
        <SearchContainer>
            <h1>검색페이지 야호~!</h1>
        </SearchContainer>
    )
}

export default Search;