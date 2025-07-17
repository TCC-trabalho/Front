import { Stack } from "@mui/material";
import { useEmpresas } from "./Empresas.hook";
import { FeedCard } from "../../../../components/FeedCard/FeedCard";

export const Empresas = () => {
    
    const { loading, mockFeed, paddingTop } = useEmpresas();

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
                    descricao={item?.descricao || ""}
                    avaliacao={item?.avaliacao || 0}
                    loading={loading}
                />
            ))}
        </Stack>
    )
} 