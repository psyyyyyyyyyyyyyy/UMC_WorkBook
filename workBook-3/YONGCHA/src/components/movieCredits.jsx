import { useParams } from 'react-router-dom';
import useCustomFetch from '../hooks/useCustomFetch';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { useGetMovieCredit } from '../hooks/queries/useGetMovieCredit';

const Title = styled.p`
    font-size: 30px;
    font-weight:bold;
    padding: 23px;
`;

const CreditsContainer = styled.div`
    width: 100%;
    background-color: black;
    color: white;
`;

const CastGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); 
    gap: 20px;
    padding: 20px;
`;

const CastCard = styled.div`
    text-align: center;
    color: white;
`;

const ProfileImage = styled.img`
    width: 100px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
`;

const CastName = styled.p`
    font-size: 14px;
    margin: 8px 0 4px;
    font-weight: bold;
`;

const OriginalName = styled.p`
    font-size: 12px;
    color: #ccc;
`;

const DEFAULT_PROFILE_IMAGE = 'https://i.pinimg.com/564x/82/29/84/82298438674c726456efcf79a2dd93d2.jpg'; 

const MovieCredits = () => {
    const { movieId } = useParams();
    const { data, isLoading, isError } = useQuery({
        queryKey: ['movieCredit', movieId],
        queryFn: () => useGetMovieCredit({ movieId }),
        gcTime: 10000,
        staleTime: 10000,
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError || !data) return <div>Error loading credits.</div>;

    const castList = data.cast;

    return (
        <CreditsContainer>
            <Title>출연진</Title>
            <CastGrid>
                {castList?.map((castMember) => (
                    <CastCard key={castMember.id}>
                        <ProfileImage 
                            src={castMember.profile_path 
                                ? `https://image.tmdb.org/t/p/w200${castMember.profile_path}` 
                                : DEFAULT_PROFILE_IMAGE}
                            alt={castMember.name} 
                        />
                        <CastName>{castMember.name}</CastName>
                        <OriginalName>{castMember.original_name}</OriginalName>
                    </CastCard>
                ))}
            </CastGrid>
        </CreditsContainer>
    );
};

export default MovieCredits;
