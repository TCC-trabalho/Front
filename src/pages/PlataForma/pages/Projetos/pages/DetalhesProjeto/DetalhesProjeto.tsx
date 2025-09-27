import { Divider, Skeleton, Stack, Typography } from "@mui/material"
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
                pt={4}
                gap={2}
                pb={2}
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
                    <img
                        src={detalhes?.foto}
                        alt=""
                        width={"100%"}
                        height={400}
                    />
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
                                <strong>Status:</strong> {detalhes?.status}
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
                                >
                                    {conteudo}
                                </Typography>
                            )}
                            <Divider sx={{ bgcolor: "#797979", height: 1.2 }} />
                        </Stack>
                    )
                })}
            </Stack>

            {projetoEhDoOrientador || alunoEhIntegrante ? (
                <Button
                    tamanho="lg"
                    icon={Pen}
                    sx={{
                        position: "fixed",
                        bottom: 16,
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 1000,
                    }}
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
                    sx={{
                        position: "fixed",
                        bottom: 16,
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 1000,
                    }}
                    to={`/plataforma-nexus/apoiar-projeto/${idProjeto}`}
                    viewTransition
                    espacamento={20}
                >
                    Apoiar
                </Button>
            )}
        </>
    )
}
