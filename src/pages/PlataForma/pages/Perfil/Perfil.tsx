/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Skeleton, Stack, Typography } from "@mui/material"
import { Button } from "../../../../components/Button/Button"
import { usePerfil } from "./Perfil.hook"
import { FeedCard } from "../../../../components/FeedCard/FeedCard"
import { Plus, Star } from "lucide-react"

export const Perfil = () => {
    const { isFetching, feed, user, userId, obterFotoUser, obterFotoUserIsPending } = usePerfil()

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
                {obterFotoUserIsPending ? (
                    <Skeleton
                        variant="circular"
                        width={190}
                        height={190}
                        sx={{ flexShrink: 0 }}
                    />
                ) : (
                    <Avatar
                        src={obterFotoUser}
                        alt="Foto do usuário"
                        sx={{ flexShrink: 0, width: 190, height: 190 }}
                    />
                )}

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
                        {user?.aluno?.nomeUsuario ||
                            user?.orientador?.nomeUsuario ||
                            user?.empresa?.nome || <Skeleton width={200} />}
                    </Typography>

                    <Typography variant="subtitle2">
                        {user.aluno?.inst_ensino ??
                            user.orientador?.formacao ??
                            user.empresa?.setor ??
                            ""}
                    </Typography>
                    {user.empresa && (
                        <Stack
                            direction={"row"}
                            gap={2}
                        >
                            <Typography variant="subtitle2">
                                {user.empresa?.qnt_projetos_patrocinados || "0"} Projetos Patrocinados
                            </Typography>
                            <Typography variant="subtitle2">
                                {user.empresa?.avaliacao || "0"}{" "}
                                <Star
                                    size={14}
                                    color="#FFD700"
                                />
                            </Typography>
                        </Stack>
                    )}

                    <Typography variant="subtitle2">
                        {user?.aluno?.email || user?.orientador?.email || user?.empresa?.email || ""}
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        sx={{ width: "90%" }}
                    >
                        {user?.aluno?.biografia ||
                            user?.orientador?.biografia ||
                            user?.empresa?.descricao ||
                            ""}
                    </Typography>
                    <Stack
                        direction={"row"}
                        gap={2}
                    >
                        <Button
                            tamanho="sm"
                            variante="ButtonGrey"
                            sx={{ width: 120 }}
                            to={`/plataforma-nexus/editar-perfil/${userId}`}
                            viewTransition
                        >
                            Editar Perfil
                        </Button>
                        {user?.orientador && (
                            <Button
                                tamanho="sm"
                                icon={Plus}
                                sx={{ width: "auto", paddingInline: 2 }}
                                to="/plataforma-nexus/cadastrar-projeto"
                                viewTransition
                            >
                                Novo Projeto
                            </Button>
                        )}
                    </Stack>
                </Stack>
            </Stack>

            <Stack>
                <Stack
                    direction={"row"}
                    pt={4}
                    pl={5}
                >
                    {(Number(user.empresa?.qnt_projetos_patrocinados ?? 0) > 0 ||
                        Number(user.aluno?.qtn_projetos ?? 0) > 0 ||
                        Number(user.orientador?.qtn_projetos ?? 0) > 0) && (
                        <Typography
                            variant="h5"
                            color="#00000040"
                        >
                            {user.empresa ? "Projetos Patrocinados" : "Meus Projetos"}
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
                    {(isFetching ? Array.from({ length: 6 }) : feed).map((item: any, index: number) => (
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
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}
