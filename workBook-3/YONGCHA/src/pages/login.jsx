import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  padding: 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
  width: 100vw;
`;

const LoginPage = () => {

    return(
        <LoginContainer>
            <h1>로그인 페이지</h1>
        </LoginContainer>
    )
}

export default LoginPage;