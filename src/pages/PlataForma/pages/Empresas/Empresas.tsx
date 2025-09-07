/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack } from "@mui/material"
import { useEmpresas } from "./Empresas.hook"
import { FeedCard } from "../../../../components/FeedCard/FeedCard"

export const Empresas = () => {
    const { feed, isFetching } = useEmpresas()

    return (
        <Stack
            justifyContent={"center"}
            minHeight={"100vh"}
            gap={4}
        >
            {(isFetching ? Array.from({ length: 3 }) : feed).map((item: any, index: number) => (
                <FeedCard
                    key={index}
                    imagemUrl={item?.foto || ""}
                    titulo={item?.nome || ""}
                    area={item?.setor || ""}
                    descricao={item?.descricao || ""}
                    avaliacao={item?.avaliacao || 0}
                    loading={isFetching}
                    idEmpresa={item?.id_empresa || 0}
                    variante={"empresa"}
                />
            ))}
        </Stack>
    )
}
