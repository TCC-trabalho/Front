/* eslint-disable @typescript-eslint/no-explicit-any */
import { Skeleton, Stack, Typography } from "@mui/material"
import { Button } from "../../../../components/Button/Button"
import { usePerfil } from "./Perfil.hook"
import { FeedCard } from "../../../../components/FeedCard/FeedCard"

export const Perfil = () => {
    const { isFetching, feed, user, userId } = usePerfil()

    return (
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
                <Skeleton
                    variant="circular"
                    width={190}
                    height={190}
                    sx={{ flexShrink: 0 }}
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
                        {user?.nomeUsuario}
                    </Typography>

                    <Typography variant="subtitle2">
                        {user?.tipoUser === "aluno"
                            ? user?.inst_ensino
                            : user?.tipoUser === "orientador"
                            ? user?.formacao
                            : user?.tipoUser === "empresa"
                            ? ""
                            : ""}
                    </Typography>
                    <Typography variant="subtitle2">{user?.email}</Typography>

                    <Typography
                        variant="subtitle1"
                        sx={{ width: "90%" }}
                    >
                        {user?.biografia}
                    </Typography>

                    <Button
                        tamanho="sm"
                        variante="ButtonGrey"
                        sx={{ width: 120 }}
                        to={`/plataforma-nexus/editar-perfil/${userId}`}
                        viewTransition
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
                    sx={{
                        display: {
                            xs: "flex",
                            lg: "grid",
                        },
                        gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                >
                    {(isFetching ? Array.from({ length: 6 }) : feed).map((item: any, index: number) => (
                        <FeedCard
                            key={index}
                            imagemUrl={item?.imagemUrl || ""}
                            titulo={item?.titulo || ""}
                            area={item?.area || ""}
                            organizacao={item?.organizacao || ""}
                            integrantes={item?.integrantes || 0}
                            descricao={item?.descricao || ""}
                            idProjeto={item?.id_projeto || 0}
                            loading={isFetching}
                            vairante={"projeto"}
                        />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}
