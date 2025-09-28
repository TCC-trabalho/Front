/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack } from "@mui/material"
import { FeedCard } from "../../../../components/FeedCard/FeedCard"
import { useProjetos } from "./Projetos.hook"

export const Projetos = () => {
    const { isFetching, feed } = useProjetos()

    return (
        <Stack gap={4}>
            {(isFetching ? Array.from({ length: 3 }) : feed).map((item: any, index: number) => (
                <FeedCard
                    key={index}
                    imagemUrl={item?.foto || ""}
                    titulo={item?.titulo || ""}
                    area={item?.area || ""}
                    organizacao={item?.organizacao || ""}
                    integrantes={item?.integrantes || 0}
                    descricao={item?.descricao || ""}
                    loading={isFetching}
                    variante={"projeto"}
                    to={`/plataforma-nexus/detalhes-projeto/${item?.id_projeto}`}
                />
            ))}
        </Stack>
    )
}
