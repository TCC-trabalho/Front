import { useObterProjetos } from "../../../../api/controllers/projeto"

export const useProjetos = () => {
    const { data, isFetching } = useObterProjetos()

    const paddingTop = {
        xs: 4,
        md: 0,
        lg: 10,
    }

    return {
        isFetching,
        feed: data ?? [],
        paddingTop,
    }
}
