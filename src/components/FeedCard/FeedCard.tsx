import { Skeleton, Stack, Typography } from "@mui/material"
import * as Styled from "./FeedCard.styled"
import { FeedCardProps } from "./FeedCard.type"
import { Star, UsersRound } from "lucide-react"
import { Link } from "react-router"
import { truncateText } from "../../lib/utils/truncateText"

export const FeedCard = ({
    imagemUrl,
    titulo,
    area,
    organizacao,
    integrantes,
    descricao,
    avaliacao,
    loading = false,
    ...props
}: FeedCardProps) => {
    return (
        <Styled.FeedCardWrapper
            {...props}
            LinkComponent={Link}
        >
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
                        {truncateText(descricao, 180)}
                    </Typography>
                )}
            </Stack>
        </Styled.FeedCardWrapper>
    )
}
