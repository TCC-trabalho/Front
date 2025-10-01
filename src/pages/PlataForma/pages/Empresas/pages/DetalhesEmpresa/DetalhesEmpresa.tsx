/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Skeleton, Stack, Typography } from "@mui/material"
import { HandHelping, MessageCircleHeart, Settings, Star } from "lucide-react"
import { useDetalhesEmpresa } from "./DetalhesEmpresa.hook"
import { FeedCard } from "../../../../../../components/FeedCard/FeedCard"
import { Button } from "../../../../../../components/Button/Button"
import { AvaliarEmpresa } from "./modais/AvaliarEmpresa/AvaliarEmpresa"
import { EmptyState } from "../../../../../../components/EmptyState/EmptyState"

export const DetalhesEmpresa = () => {
    const { isFetching, feed, empresa, modal, setModal, user, isEmpty } = useDetalhesEmpresa()

    return (
        <>
            <Stack
                width={{ xs: "95%", md: "60%" }}
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
                                {empresa?.total_projetos || "0"} Projetos Patrocinados
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
                            <Stack
                                direction={"row"}
                                gap={1.5}
                            >
                                <Button
                                    tamanho="md"
                                    icon={MessageCircleHeart}
                                    ladoIcon="direita"
                                    variante="ButtonBlue"
                                    espacamento={20}
                                    onClick={() => setModal(true)}
                                >
                                    Avaliar Empresa
                                </Button>
                                <Button
                                    tamanho="md"
                                    icon={HandHelping}
                                    ladoIcon="direita"
                                    espacamento={20}
                                    to={`/plataforma-nexus/solicitar-apoio/${empresa?.empresa?.id_empresa}`}
                                    viewTransition
                                >
                                    Solicitar Apoio
                                </Button>
                            </Stack>
                        )}
                    </Stack>
                </Stack>

                <Stack>
                    <Stack p={4}>
                        {Number(empresa?.empresa?.qnt_projetos_patrocinados ?? 0) > 0 && (
                            <Typography
                                variant="h5"
                                color="#00000040"
                            >
                                Projetos Patrocinados
                            </Typography>
                        )}
                    </Stack>
                    {isEmpty ? (
                        <EmptyState
                            icon={Settings}
                            message={"Nenhum projeto patrocinado até o momento."}
                            buttonText={"Dar apoio a um projeto"}
                            width={"100%"}
                            button={null}
                            height={{
                                xs: 300,
                                md: 500,
                                lg: 550,
                            }}
                        />
                    ) : (
                        <Stack
                            sx={{
                                display: {
                                    xs: "flex",
                                    lg: "grid",
                                },
                                alignItems: "center",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: 4,
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
                                        loading={isFetching}
                                        variante={"projeto"}
                                        to={`/plataforma-nexus/detalhes-projeto/${item?.id_projeto}`}
                                    />
                                )
                            )}
                        </Stack>
                    )}
                </Stack>
            </Stack>
            <AvaliarEmpresa
                open={modal}
                onClose={() => setModal(false)}
            />
        </>
    )
}
