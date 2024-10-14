import React from 'react';
import styled from 'styled-components';

const UpComingContainer = styled.div`
  padding: 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
  width: 100vw;
`;

const UpComingPage = () => {

    return(
        <UpComingContainer>
            <h1>인기 페이지</h1>
        </UpComingContainer>
    )
}

export default UpComingPage;