import React, { useState } from 'react';
import * as S from './search.style';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import useCustomFetch from '../../hooks/useCustomFetch';
import CardListSkeleton from '../../components/Skeleton/card-list-skeleton';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    };

    const [searchParams, setSearchParams] = useSearchParams({
        mp: ''
    });
    const mq = searchParams.get('mq');

    const handleSearchMovie = () => {
        if (mq === searchValue) return;
        navigate(`/search?mq=${searchValue}`);
    };

    const handleSearchMovieWithKeyboard = (e) => {
        if (e.key === 'Enter') {
            handleSearchMovie();
        }
    };

    const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
    const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;
    const { data: movies, isLoading, isError } = useCustomFetch(url);

    if (isLoading) {
        return (
            <S.SearchContainer>
                <S.SearchBox>
                    <input
                        placeholder="영화 제목을 입력해주세요"
                        value={searchValue}
                        onChange={onChangeSearchValue}
                        onKeyDown={handleSearchMovieWithKeyboard}
                    />
                    <button onClick={handleSearchMovie}>검색</button>
                </S.SearchBox>
                <S.MovieList>
                    <CardListSkeleton number={20} />
                </S.MovieList>
            </S.SearchContainer>
        );
    }
    if (isError) return <p>Error loading movies.</p>;

    return (
        <S.SearchContainer>
            <S.SearchBox>
                <input
                    placeholder="영화 제목을 입력해주세요"
                    value={searchValue}
                    onChange={onChangeSearchValue}
                    onKeyDown={handleSearchMovieWithKeyboard}
                />
                <button onClick={handleSearchMovie}>검색</button>
            </S.SearchBox>
            {mq && (
                <S.MovieList>
                    {movies?.results?.map(movie => (
                        <S.MovieCard key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                                <S.MoviePoster src={`${POSTER_URL}${movie.poster_path}`} alt={movie.title} />
                                <S.MovieInfo>
                                    <S.MovieTitle>{movie.title}</S.MovieTitle>
                                    <S.MovieReleaseDate>{movie.release_date}</S.MovieReleaseDate>
                                </S.MovieInfo>
                            </Link>
                        </S.MovieCard>
                    ))}
                </S.MovieList>
            )}
            {movies?.results?.length === 0 && mq && (
                <S.NoData> 검색어 {mq}에 해당하는 데이터가 없습니다. </S.NoData>
            )}
        </S.SearchContainer>
    );
};



export default Search;
