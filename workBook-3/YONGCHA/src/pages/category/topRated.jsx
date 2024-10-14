import React from 'react';
import styled from 'styled-components';

const ToRatedContainer = styled.div`
  padding: 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
  width: 100vw;
`;

const ToRatedPage = () => {

    return(
        <ToRatedContainer>
            <h1>인기 페이지</h1>
        </ToRatedContainer>
    )
}

export default ToRatedPage;