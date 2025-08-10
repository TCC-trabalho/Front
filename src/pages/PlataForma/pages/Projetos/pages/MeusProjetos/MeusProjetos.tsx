/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack } from "@mui/material"
import { FeedCard } from "../../../../../../components/FeedCard/FeedCard"
import { useMeusProjetos } from "./MeusProjetos.hook"

export const MeusProjetos = () => {
    const { isFetching, feed } = useMeusProjetos()

    return (
        <Stack
            width={{ xs: "95%", md: "60%" }}
            pt={{ xs: 10, md: 14 }}
            gap={2}
            pb={2}
        >
            <Stack
                sx={{
                    display: {
                        xs: "flex",
                        lg: "grid",
                    },
                    gridTemplateColumns: "repeat(2, 1fr)",
                }}
            >
                {(isFetching ? Array.from({ length: 6 }) : feed).map((item: any, index: number) => (
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
        </Stack>
    )
}
