import { axiosInstance } from "../../apis/axios-instance";

const useGetMovieCredit = async ({movieId}) => {
    const {data} = await axiosInstance.get(`/movie/${movieId}/credits?language=ko-KR`)

    return data;
}

export {useGetMovieCredit}