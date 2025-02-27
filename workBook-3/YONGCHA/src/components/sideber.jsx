import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaFilm } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #333;
  color: white;
  height: 100vh;
  padding-top: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;

  li {
    padding: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: white;

    &:hover {
      background-color: #444;
    }

    svg {
      margin-right: 10px;
    }
    
    a {
    text-decoration: none;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  }
`;

const sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarMenu>
        <Link to="search">
          <li>
            <FaSearch /> 찾기
          </li>
        </Link>
        <Link to="movies">
          <li>
            <FaFilm /> 영화
          </li>
        </Link>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default sidebar;
