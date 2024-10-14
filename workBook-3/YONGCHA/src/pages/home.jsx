import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
  width: 100vw;
`;

const HomePage = () => {
    return (
        <HomeContainer>
            <h1>Home Page 야호~!</h1>
        </HomeContainer>
    );
};

export default HomePage;