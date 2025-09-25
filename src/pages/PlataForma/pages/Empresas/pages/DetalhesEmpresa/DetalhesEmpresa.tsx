/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Skeleton, Stack, Typography } from "@mui/material"
import { MessageCircleHeart, Star } from "lucide-react"
import { useDetalhesEmpresa } from "./DetalhesEmpresa.hook"
import { FeedCard } from "../../../../../../components/FeedCard/FeedCard"
import { Button } from "../../../../../../components/Button/Button"
import { AvaliarEmpresa } from "./modais/AvaliarEmpresa/AvaliarEmpresa"

export const DetalhesEmpresa = () => {
    const { isFetching, feed, empresa, modal, setModal, user } = useDetalhesEmpresa()

    return (
        <>
            <Stack
                width={{ xs: "95%", md: "60%" }}
                pt={{
                    xs: 0,
                    md: 8,
                }}
                gap={2}
                pb={2}
            >
                <Stack
                    gap={4}
                    pl={{
                        xs: 0,
                        sm: 5,
                    }}
                    direction={{
                        xs: "column",
                        sm: "row",
                    }}
                    justifyContent={{
                        xs: "center",
                        sm: "initial",
                    }}
                    alignItems={{
                        xs: "center",
                        sm: "initial",
                    }}
                    textAlign={{
                        xs: "center",
                        sm: "initial",
                    }}
                >
                    <Avatar
                        src={empresa?.empresa.foto}
                        alt="Foto do usuário"
                        sx={{ flexShrink: 0, width: 190, height: 190 }}
                    />

                    <Stack
                        gap={1}
                        sx={{ flex: 1 }}
                        justifyContent={{
                            xs: "center",
                            sm: "initial",
                        }}
                        alignItems={{
                            xs: "center",
                            sm: "initial",
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight={600}
                        >
                            {empresa?.empresa?.nome || <Skeleton width={200} />}
                        </Typography>

                        <Typography variant="subtitle2">{empresa?.empresa.setor ?? ""}</Typography>

                        <Stack
                            direction={"row"}
                            gap={2}
                        >
                            <Typography variant="subtitle2">
                                {empresa?.total_projetos || "0"} Projetos
                                Patrocinados
                            </Typography>
                            <Typography variant="subtitle2">
                                {empresa?.empresa?.avaliacao || "0"}{" "}
                                <Star
                                    size={14}
                                    color="#FFD700"
                                />
                            </Typography>
                        </Stack>

                        <Typography variant="subtitle2">{empresa?.empresa?.email || ""}</Typography>
                        
                        <Typography
                            variant="subtitle1"
                            sx={{ width: "90%" }}
                        >
                            {empresa?.empresa?.descricao || ""}
                        </Typography>

                        {!user?.empresa && !user?.visitante && (
                            <Button
                                tamanho="md"
                                icon={MessageCircleHeart}
                                ladoIcon="direita"
                                variante="ButtonBlue"
                                sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "50%",
                                        md: "30%",
                                    },
                                }}
                                onClick={() => setModal(true)}
                            >
                                Avaliar Empresa
                            </Button>
                        )}
                    </Stack>
                </Stack>

                <Stack>
                    <Stack
                        direction={"row"}
                        pt={4}
                        pl={5}
                    >
                        {Number(empresa?.empresa?.qnt_projetos_patrocinados ?? 0) > 0 && (
                            <Typography
                                variant="h5"
                                color="#00000040"
                            >
                                Projetos Patrocinados
                            </Typography>
                        )}
                    </Stack>
                    <Stack
                        sx={{
                            display: {
                                xs: "flex",
                                lg: "grid",
                            },
                            gridTemplateColumns: "repeat(2, 1fr)",
                        }}
                    >
                        {(isFetching ? Array.from({ length: 6 }) : feed).map(
                            (item: any, index: number) => (
                                <FeedCard
                                    key={index}
                                    imagemUrl={item?.foto || ""}
                                    titulo={item?.titulo || ""}
                                    area={item?.area || ""}
                                    organizacao={item?.organizacao || ""}
                                    integrantes={item?.integrantes || 0}
                                    descricao={item?.descricao || ""}
                                    idProjeto={item?.id_projeto || 0}
                                    loading={isFetching}
                                    variante={"projeto"}
                                />
                            )
                        )}
                    </Stack>
                </Stack>
            </Stack>
            <AvaliarEmpresa
                open={modal}
                onClose={() => setModal(false)}
            />
        </>
    )
}
