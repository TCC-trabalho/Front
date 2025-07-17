import { Skeleton, Stack, Typography } from "@mui/material"
import { Button } from "../../../../components/Button/Button"
import { FeedCard } from "../../../../components/FeedCard/FeedCard"
import { useProjetos } from "../Projetos/Projetos.hook"

export const Perfil = () => {

    const { loading, mockFeed, paddingTop } = useProjetos();

    return (
        <Stack
            gap={2}
            justifyContent={"center"}
            minHeight={"100vh"}
            paddingTop={paddingTop}
            sx={{
                scale: {
                    xs: "0.85",
                    xl: "1"
                }
            }}
        >
            <Stack
                gap={4}
                direction={"row"}
                justifyContent={"center"}
                pt={4}
            >
                <Skeleton variant="circular" width={160} height={160} />

                <Stack
                    gap={1}
                    justifyContent={"center"}
                >

                    <Typography variant="h4" fontWeight={600}>Nome Usuario</Typography>
                    <Typography variant="caption">@teste@email</Typography>

                    <Button
                        tamanho="sm"
                        variante="ButtonGrey"
                        sx={{ width: 120 }}
                    >
                        Editar Perfil
                    </Button>

                    <Typography variant="subtitle2">Insituição</Typography>

                </Stack>

            </Stack>

            <Stack
                direction="row"
                alignItems="flex-start"
                sx={{
                    overflowX: "auto",
                    flexWrap: "nowrap",
                    pl: {
                        xs: 0,
                        md: "20%"
                    },
                    width: "100%",
                    height: 550,
                    overflowY: "hidden",
                    maxWidth: "100vw",
                }}
            >
                {(loading ? Array.from({ length: 3 }) : mockFeed).map((item, index) => (
                    <Stack key={index} justifyContent={"center"} alignItems={"center"}>
                        <FeedCard
                            imagemUrl={item?.imagemUrl || ""}
                            titulo={item?.titulo || ""}
                            area={item?.area || ""}
                            organizacao={item?.organizacao || ""}
                            integrantes={item?.integrantes || 0}
                            descricao={item?.descricao || ""}
                            loading={loading}
                        />
                    </Stack>
                ))}
            </Stack>

        </Stack>
    )
}