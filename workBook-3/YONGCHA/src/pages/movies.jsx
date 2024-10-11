import React from 'react';
import styled from 'styled-components';

const MoviesContainer = styled.div`
  padding: 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
  width: 100vw;
`;

const CategoryTitle = styled.h1`
  margin-bottom: 20px;
`;

const CategoryList = styled.div`
  display: flex;
  gap: 20px;
`;

const CategoryCard = styled.div`
  width: 250px;
  height: 140px;
  background-color: #333;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: "${(props) => props.label}";
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
  }
`;

const MoviesPage = () => {
  return (
    <MoviesContainer>
      <CategoryTitle>카테고리</CategoryTitle>
      <CategoryList>
        <CategoryCard label="현재 상영중인">
          <img src="" alt="현재 상영중인" />
        </CategoryCard>
        <CategoryCard label="인기있는">
          <img src="" alt="인기있는" />
        </CategoryCard>
        <CategoryCard label="높은 평가를 받은">
          <img src="" alt="높은 평가를 받은" />
        </CategoryCard>
        <CategoryCard label="개봉 예정중인">
          <img src="" alt="개봉 예정중인" />
        </CategoryCard>
      </CategoryList>
    </MoviesContainer>
  );
};

export default MoviesPage;
