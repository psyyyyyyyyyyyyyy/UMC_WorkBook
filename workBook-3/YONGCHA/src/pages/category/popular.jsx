import React from 'react';
import styled from 'styled-components';

const PopularContainer = styled.div`
  padding: 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
  width: 100vw;
`;

const PopularPage = () => {

    return(
        <PopularContainer>
            <h1>인기 페이지</h1>
        </PopularContainer>
    )
}

export default PopularPage;