import { Divider, Skeleton, Stack, Typography } from "@mui/material"
import * as Styled from "./FeedCard.styled"
import { FeedCardProps } from "./FeedCard.type"
import { Star, UsersRound } from "lucide-react"
import { Button } from "../Button/Button"

export const FeedCard = ({
    imagemUrl,
    titulo,
    area,
    organizacao,
    integrantes,
    descricao,
    avaliacao,
    loading = false,
    idProjeto,
    idEmpresa,
    variante = "projeto",
    ...props
}: FeedCardProps) => {
    return (
        <Button
            variante="ButtonLinkBlack"
            tamanho="md"
            sx={{
                width: "auto",
                height: "auto",
            }}
            to={
                variante == "projeto"
                    ? `/plataforma-nexus/detalhes-projeto/${idProjeto}`
                    : `/plataforma-nexus/detalhes-empresa/${idEmpresa}`
            }
            viewTransition
        >
            <Styled.FeedCardWrapper {...props}>
                <Stack className="header">
                    {loading ? (
                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={350}
                            sx={{
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                            }}
                        />
                    ) : (
                        <img
                            src={imagemUrl}
                            alt=""
                            width={"100%"}
                            height={"100%"}
                        />
                    )}
                </Stack>

                <Stack className="content">
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        {loading ? (
                            <Skeleton
                                variant="text"
                                width="90%"
                                height={70}
                            />
                        ) : (
                            <Typography
                                variant="h4"
                                color="#05334A"
                            >
                                {titulo}
                            </Typography>
                        )}

                        {loading ? (
                            <Skeleton
                                variant="text"
                                width={40}
                                height={60}
                            />
                        ) : (
                            <Stack
                                direction={"row"}
                                alignItems={"center"}
                                gap={1}
                            >
                                {avaliacao}{" "}
                                {avaliacao && (
                                    <Star
                                        size={20}
                                        color="#FFD900"
                                    />
                                )}
                            </Stack>
                        )}
                    </Stack>

                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        {loading ? (
                            <Skeleton
                                variant="text"
                                width="40%"
                                height={30}
                            />
                        ) : (
                            <Typography
                                variant="body1"
                                color="#064B72"
                            >
                                {area}
                            </Typography>
                        )}

                        {loading ? (
                            <Skeleton
                                variant="text"
                                width={40}
                                height={60}
                            />
                        ) : (
                            <Stack
                                direction={"row"}
                                alignItems={"center"}
                                gap={1}
                            >
                                {integrantes} {integrantes && <UsersRound size={20} />}
                            </Stack>
                        )}
                    </Stack>

                    {loading ? (
                        <Skeleton
                            variant="text"
                            width="80%"
                            height={0}
                        />
                    ) : (
                        <Typography
                            variant="body1"
                            color="#B3B3B3"
                        >
                            {organizacao}
                        </Typography>
                    )}

                    {loading ? (
                        <>
                            <Skeleton
                                variant="text"
                                width="100%"
                                height={20}
                            />
                            <Skeleton
                                variant="text"
                                width="90%"
                                height={20}
                            />
                            <Skeleton
                                variant="text"
                                width="95%"
                                height={20}
                            />
                        </>
                    ) : (
                        <Typography
                            variant="body1"
                            color="#3F3F3F"
                        >
                            {descricao}
                        </Typography>
                    )}
                </Stack>

                <Divider sx={{ bgcolor: "#c9c9c9ff", height: 1.5 }} />
            </Styled.FeedCardWrapper>
        </Button>
    )
}
