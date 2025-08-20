import { useObterProjetos } from "../../../../api/controllers/projeto"

export const useProjetos = () => {
    const { data, isFetching } = useObterProjetos()

    return {
        isFetching,
        feed: data ?? [],
    }
}
