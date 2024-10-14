import React from 'react';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  padding: 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
  width: 100vw;
`;

const signUpPage = () => {

    return(
        <SignUpContainer>
            <h1>회원가입 페이지</h1>
        </SignUpContainer>
    )
}

export default signUpPage;