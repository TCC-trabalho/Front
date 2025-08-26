import { useObterProjetos } from "../../../../api/controllers/projeto"

export const useProjetos = () => {
    const { data, isPending } = useObterProjetos()

    return {
        isFetching: isPending,
        feed: data ?? [],
    }
}
