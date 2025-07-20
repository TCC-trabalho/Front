import { Divider, Skeleton, Stack, Typography } from "@mui/material"
import { HandHeart, Pen, UsersRound } from "lucide-react"
import { useDetalhesProjeto } from "./DetalhesProjeto.hook"
import { Button } from "../../../../../../components/Button/Button"

export const DetalhesProjeto = () => {

    const { mockFeed, loading } = useDetalhesProjeto()

    const {
        imagemUrl,
        titulo,
        area,
        organizacao,
        integrantes,
        status,
        resumo,
        objetivo,
        justificativa,
    } = mockFeed[0] || {};

    return (
        <>
            <Stack
                width={{ xs: "95%", md: "50%" }}
                pt={{ xs: 10, md: 14 }}
                gap={2}
                pb={2}
            >

                {loading ? (
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
                        src={imagemUrl}
                        alt=""
                        width={"100%"}
                        height={400}
                    />
                )}

                <Stack direction={"row"} justifyContent={"space-between"}>

                    <Stack>
                        {loading ? (
                            <>
                                <Skeleton width={200} height={35} />
                                <Skeleton width={100} height={25} />
                            </>
                        ) : (
                            <>
                                <Typography variant="h5" color="#05334A">{titulo}</Typography>
                                <Typography variant="body1" fontWeight={600} color="#064B72">{area}</Typography>
                            </>
                        )}
                    </Stack>


                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                        {loading ? <Skeleton width={40} height={25} /> : integrantes} <UsersRound size={20} />
                    </Stack>

                </Stack>

                <Stack direction={"row"} justifyContent={"space-between"}>
                    {loading ? (
                        <>
                            <Skeleton width={100} height={25} />
                            <Skeleton width={100} height={25} />
                        </>
                    ) : (
                        <>
                            <Typography variant="body1" fontWeight={600} color="#064B72">{organizacao}</Typography>
                            <Typography variant="body1" color="#064B72"><strong>Status:</strong> {status}</Typography>
                        </>
                    )}

                </Stack>

                {["Resumo", "Objetivo", "Justificativa"].map((secao, index) => {
                    const conteudo = [resumo, objetivo, justificativa][index];
                    return (
                        <Stack key={secao} gap={2}>
                            <Typography variant="body1" fontWeight={600} color="#064B72">{secao}</Typography>
                            {loading ? (
                                <>
                                    <Skeleton width="100%" height={20} />
                                    <Skeleton width="100%" height={20} />
                                    <Skeleton width="90%" height={20} />
                                </>
                            ) : (
                                <Typography variant="body1" color="#3F3F3F" textAlign={"justify"}>
                                    {conteudo}
                                </Typography>
                            )}
                            <Divider sx={{ bgcolor: "#797979", height: 1.2 }} />
                        </Stack>
                    );
                })}

            </Stack>
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
            >
                Editar
            </Button>

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
            >
                Apoiar
            </Button>
        </>
    )
}