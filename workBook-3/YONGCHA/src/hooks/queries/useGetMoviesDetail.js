import { axiosInstance } from "../../apis/axios-instance";

const useGetMoviesDetail = async ({movieId}) => {
    const {data} = await axiosInstance.get(`/movie/${movieId}?language=ko-KR`)

    return data;
}

export {useGetMoviesDetail}