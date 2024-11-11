import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MoviesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 200px;
  background-color: #000;
  color: white;
  height: 100vh;
  width: calc(100vw - 200px);
  overflow-y: auto;
`;

const CategoryTitle = styled.h1`
  margin-bottom: 20px;
  margin-left: 80px;
`;

const CategoryList = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
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
  const categories = [
    { image: 'https://i.pinimg.com/236x/78/42/2f/78422f616ca1d041b324cf22f2d20883.jpg', label: '현재 상영중인', type: 'now-playing' },
    { image: 'https://i.pinimg.com/236x/0f/4f/44/0f4f445fe68a1a197496422b00f17f23.jpg', label: '인기있는', type: 'popular' },
    { image: 'https://i.pinimg.com/736x/11/00/87/110087c93ffa26ccffe091cca283faec.jpg', label: '높은 평가를 받은', type: 'top-rated' },
    { image: 'https://i.pinimg.com/236x/42/8f/a6/428fa6e8b8bee43c4dd89c838b177d59.jpg', label: '개봉 예정중인', type: 'up-coming' },
  ];

  const navigate = useNavigate();

  return (
    <MoviesContainer>
      <CategoryTitle>카테고리</CategoryTitle>
      <CategoryList>
        {categories.map((category, index) => (
          <CategoryCard onClick={() => navigate(`/movies/category/${category.type}`)} key={index} label={category.label}>
            <img src={category.image} alt={category.label} />
          </CategoryCard>
        ))}
      </CategoryList>
    </MoviesContainer>
  );
};

export default MoviesPage;
