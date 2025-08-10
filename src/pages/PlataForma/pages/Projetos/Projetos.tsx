/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack } from "@mui/material"
import { FeedCard } from "../../../../components/FeedCard/FeedCard"
import { useProjetos } from "./Projetos.hook"

export const Projetos = () => {
    const { isFetching, feed, paddingTop } = useProjetos()

    return (
        <Stack
            justifyContent={"center"}
            minHeight={"100vh"}
            gap={4}
            pt={paddingTop}
        >
            {(isFetching ? Array.from({ length: 3 }) : feed).map((item: any, index: number) => (
                <FeedCard
                    key={index}
                    imagemUrl={item?.imagemUrl || ""}
                    titulo={item?.titulo || ""}
                    area={item?.area || ""}
                    organizacao={item?.organizacao || ""}
                    integrantes={item?.integrantes || 0}
                    descricao={item?.descricao || ""}
                    idProjeto={item?.id_projeto || 0}
                    loading={isFetching}
                    vairante={"projeto"}
                />
            ))}
        </Stack>
    )
}
