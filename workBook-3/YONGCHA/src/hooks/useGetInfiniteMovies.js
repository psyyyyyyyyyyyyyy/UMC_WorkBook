import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetMovies } from "./queries/useGetMovies";

function useGetInfiniteMovies(category) {
    return useInfiniteQuery({
        queryFn: ({pageParam}) => useGetMovies({category, pageParam}),
        queryKey: ['movies', category],
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPage) => {
            const lastMovie = lastPage.results.at(-1);
            return lastMovie ? allPage?.length + 1 : undefined;
        }
    })
}

export {useGetInfiniteMovies}