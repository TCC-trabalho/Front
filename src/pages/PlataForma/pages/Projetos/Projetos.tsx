import { Stack } from "@mui/material";
import { FeedCard } from "../../../../components/FeedCard/FeedCard";
import { useProjetos } from "./Projetos.hook";

export const Projetos = () => {

    const { loading, mockFeed, paddingTop } = useProjetos();

    return (
        <Stack
            justifyContent={"center"}
            minHeight={"100vh"}
            gap={4}
            pt={paddingTop}
        >
            {(loading ? Array.from({ length: 3 }) : mockFeed).map((item, index) => (
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
    )
}
