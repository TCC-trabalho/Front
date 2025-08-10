/* eslint-disable @typescript-eslint/no-explicit-any */
import { Skeleton, Stack, Typography } from "@mui/material"
import { Button } from "../../../../components/Button/Button"
import { FeedCard } from "../../../../components/FeedCard/FeedCard"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { usePerfil } from "./Perfil.hook"

export const Perfil = () => {
    const { isAboveMd, scroll, scrollRef, isFetching, feed, paddingTop, user } = usePerfil()

    return (
        <Stack
            gap={4}
            minHeight={"100vh"}
            paddingTop={paddingTop}
            sx={{
                scale: {
                    xs: "0.85",
                    xl: "0.9",
                },
                pl: {
                    xs: 0,
                    md: "50%",
                },
            }}
        >
            {/* Header */}
            <Stack
                gap={4}
                direction={"row"}
                pt={4}
                pl={5}
            >
                <Skeleton
                    variant="circular"
                    width={160}
                    height={160}
                />

                <Stack
                    gap={1}
                    justifyContent={"center"}
                >
                    <Typography
                        variant="h4"
                        fontWeight={600}
                    >
                        {user?.nomeUsuario}
                    </Typography>
                    <Typography variant="subtitle2">{user?.inst_ensino}</Typography>
                    <Typography variant="subtitle2">{user?.email}</Typography>

                    <Button
                        tamanho="sm"
                        variante="ButtonGrey"
                        sx={{ width: 120 }}
                    >
                        Editar Perfil
                    </Button>
                </Stack>
            </Stack>

            <Stack>
                <Stack
                    direction={"row"}
                    pt={4}
                    pl={5}
                >
                    <Typography
                        variant="h5"
                        color="#00000040"
                    >
                        Meus Projetos
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    alignItems="center"
                    position="relative"
                >
                    {isAboveMd && (
                        <Button
                            tamanho="lg"
                            variante="ButtonOutlinedBlue"
                            icon={ChevronLeft}
                            somenteIcone
                            onClick={() => scroll(-600)}
                            sx={{
                                position: "absolute",
                                zIndex: 2,
                            }}
                        />
                    )}

                    <Stack
                        direction="row"
                        ref={scrollRef}
                        sx={{
                            overflowY: "hidden",
                            maxWidth: "110vw",
                            cursor: "grab",
                            overflowX: "auto",
                            "&::-webkit-scrollbar": {
                                height: 8,
                            },
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "transparent",
                                borderRadius: 4,
                            },
                            "&::-webkit-scrollbar-track": {
                                backgroundColor: "transparent",
                            },
                        }}
                    >
                        {(isFetching ? Array.from({ length: 3 }) : feed).map(
                            (item: any, index: number) => (
                                <Stack key={index}>
                                    <FeedCard
                                        imagemUrl={item?.imagemUrl || ""}
                                        titulo={item?.titulo || ""}
                                        area={item?.area || ""}
                                        organizacao={item?.organizacao || ""}
                                        integrantes={item?.integrantes || 0}
                                        descricao={item?.descricao || ""}
                                        loading={isFetching}
                                        idProjeto={item?.id_projeto || 0}
                                        vairante={"projeto"}
                                    />
                                </Stack>
                            )
                        )}
                    </Stack>

                    {isAboveMd && (
                        <Button
                            tamanho="lg"
                            variante="ButtonOutlinedBlue"
                            icon={ChevronRight}
                            somenteIcone
                            onClick={() => scroll(600)}
                            sx={{
                                position: "absolute",
                                right: "25%",
                                zIndex: 2,
                            }}
                        />
                    )}
                </Stack>
            </Stack>
        </Stack>
    )
}
