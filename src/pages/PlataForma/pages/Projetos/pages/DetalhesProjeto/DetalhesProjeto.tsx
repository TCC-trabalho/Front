import { Chip, Skeleton, Stack, Typography } from "@mui/material"
import { HandHeart, Pen, UsersRound } from "lucide-react"
import { useDetalhesProjeto } from "./DetalhesProjeto.hook"
import { Button } from "../../../../../../components/Button/Button"

export const DetalhesProjeto = () => {
    const { isFetching, detalhes, tipoUser, alunoEhIntegrante, projetoEhDoOrientador, idProjeto } =
        useDetalhesProjeto()

    return (
        <>
            <Stack
                width={{ xs: "95%", md: "45%" }}
                gap={2}
                sx={{
                    bgcolor: "#FFFFFF",
                    p: 4,
                    borderRadius: 5,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                {isFetching ? (
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={400}
                        sx={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }}
                    />
                ) : (
                    <Stack
                        borderRadius={2}
                        overflow={"hidden"}
                        boxShadow={2}
                    >
                        <img
                            src={detalhes?.foto}
                            alt=""
                            width={"100%"}
                            height={400}
                        />
                    </Stack>
                )}

                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                >
                    <Stack>
                        {isFetching ? (
                            <>
                                <Skeleton
                                    width={200}
                                    height={35}
                                />
                                <Skeleton
                                    width={100}
                                    height={25}
                                />
                            </>
                        ) : (
                            <>
                                <Typography
                                    variant="h5"
                                    color="#05334A"
                                >
                                    {detalhes?.titulo}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    fontWeight={600}
                                    color="#064B72"
                                >
                                    {detalhes?.area}
                                </Typography>
                            </>
                        )}
                    </Stack>

                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        gap={1}
                    >
                        {isFetching ? (
                            <Skeleton
                                width={40}
                                height={25}
                            />
                        ) : (
                            detalhes?.integrantes
                        )}{" "}
                        <UsersRound size={20} />
                    </Stack>
                </Stack>

                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                >
                    {isFetching ? (
                        <>
                            <Skeleton
                                width={100}
                                height={25}
                            />
                            <Skeleton
                                width={100}
                                height={25}
                            />
                        </>
                    ) : (
                        <>
                            <Typography
                                variant="body1"
                                fontWeight={600}
                                color="#064B72"
                            >
                                {detalhes?.organizacao}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="#064B72"
                            >
                                <Chip
                                    label={detalhes?.status}
                                    sx={{ bgcolor: "#064B72", color: "#FFFFFF" }}
                                />
                            </Typography>
                        </>
                    )}
                </Stack>

                {["Resumo", "Objetivo", "Justificativa"].map((secao, index) => {
                    const conteudo = [detalhes?.descricao, detalhes?.objetivo, detalhes?.justificativa][
                        index
                    ]
                    return (
                        <Stack
                            key={secao}
                            gap={2}
                        >
                            <Typography
                                variant="body1"
                                fontWeight={600}
                                color="#064B72"
                            >
                                {secao}
                            </Typography>
                            {isFetching ? (
                                <>
                                    <Skeleton
                                        width="100%"
                                        height={20}
                                    />
                                    <Skeleton
                                        width="100%"
                                        height={20}
                                    />
                                    <Skeleton
                                        width="90%"
                                        height={20}
                                    />
                                </>
                            ) : (
                                <Typography
                                    variant="body1"
                                    color="#3F3F3F"
                                    textAlign={"justify"}
                                    bgcolor={"#F5F5F5"}
                                    p={2}
                                    borderRadius={2}
                                >
                                    {conteudo}
                                </Typography>
                            )}
                        </Stack>
                    )
                })}
                <Stack
                    direction={"row"}
                    gap={1}
                >
                    <Button
                        variante="ButtonOutlinedBlue"
                        tamanho="lg"
                        to={`/plataforma-nexus/projetos`}
                        viewTransition
                        sx={{
                            width: {
                                xs: "100%",
                                md: "25%",
                            },
                        }}
                    >
                        Voltar
                    </Button>
                    {projetoEhDoOrientador || alunoEhIntegrante ? (
                        <Button
                            tamanho="lg"
                            icon={Pen}
                            to={`/plataforma-nexus/detalhes-projeto/${idProjeto}/editar`}
                            viewTransition
                            espacamento={20}
                        >
                            Editar
                        </Button>
                    ) : null}

                    {(tipoUser === "empresa" || tipoUser === "visitante") && (
                        <Button
                            tamanho="lg"
                            icon={HandHeart}
                            to={`/plataforma-nexus/apoiar-projeto/${idProjeto}`}
                            viewTransition
                            sx={{
                                width: {
                                    xs: "100%",
                                    md: "25%",
                                },
                            }}
                        >
                            Apoiar
                        </Button>
                    )}
                </Stack>
            </Stack>
        </>
    )
}
