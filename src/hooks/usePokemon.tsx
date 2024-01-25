import { getData, } from '../api/service';
import { useInfiniteQuery, } from '@tanstack/react-query';
import { POKEMON_API_POKEMON_URL } from '../Constants/url';

const usePokemon = () => {
    const { data, isLoading, fetchNextPage, } = useInfiniteQuery({
        queryKey: ['pokemon'],
        queryFn: ({ pageParam }) => {
            return getData(pageParam);
        },
        initialPageParam: POKEMON_API_POKEMON_URL,
        getPreviousPageParam: (firstPage) => firstPage.previous ?? undefined,
        getNextPageParam: (lastPage) => lastPage.next ?? undefined,
    })



    return (
        {
            data: data?.pages.reduce((acc, value) => acc.concat(value.results), []),
            isLoading,
            fetchNextPage
        }
    )
}

export default usePokemon
