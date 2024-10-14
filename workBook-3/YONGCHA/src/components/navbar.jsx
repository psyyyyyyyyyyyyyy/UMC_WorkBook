import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #222;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff4b5c;
`;

const NavButtons = styled.div`
  display: flex;
  margin-left: 70%;
  button {
    background-color: #222;
    border: none;
    color: white;
    padding: 10px 20px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 5px;
    
    &:hover {
      background-color: #ff4b5c;
    }
  }
`;

const navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/">
      <Logo>YONGCHA</Logo>
      </Link>
      <NavButtons>
        <Link to="login">
          <button>로그인</button>
        </Link>
        <Link to="signup">
          <button>회원가입</button>
        </Link>
      </NavButtons>
    </NavbarContainer>
  );
};

export default navbar;
