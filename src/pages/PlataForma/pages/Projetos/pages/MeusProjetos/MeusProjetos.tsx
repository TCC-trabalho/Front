import { Stack } from "@mui/material"
import { FeedCard } from "../../../../../../components/FeedCard/FeedCard"
import { useMeusProjetos } from "./MeusProjetos.hook"

export const MeusProjetos = () => {

    const { loading, mockFeed } = useMeusProjetos()

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
                        lg: "grid"
                    },
                    gridTemplateColumns: "repeat(2, 1fr)"
                }}
            >
                {(loading ? Array.from({ length: 6 }) : mockFeed).map((item, index) => (
                    <FeedCard
                        key={index}
                        imagemUrl={item?.imagemUrl || ""}
                        titulo={item?.titulo || ""}
                        area={item?.area || ""}
                        organizacao={item?.organizacao || ""}
                        integrantes={item?.integrantes || 0}
                        descricao={item?.descricao || ""}
                        idProjeto={item?.idProjeto || 0}
                        loading={loading}
                        vairante={"projeto"}
                    />
                ))}
            </Stack>
        </Stack>
    )
}