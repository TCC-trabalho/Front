import { Avatar, Skeleton, Stack, Typography } from "@mui/material"
import { Header } from "../../../../components/Header/Header"
import { Menu } from "../../../../components/Menu/Menu"
import * as Styled from "./ContainerPlataforma.styled"
import { Input } from "../../../../components/Input/Input"
import { Search, UserRound } from "lucide-react"
import { Button } from "../../../../components/Button/Button"
import { Outlet } from "react-router"
import { useContainerPlataforma } from "./ContainerPlataforma.hook"
import { useControleExibicao } from "../../../../lib/utils/controleExibicao"
import { truncateText } from "../../../../lib/utils/truncateText"
import { useRotasSemPadding } from "../../../../lib/utils/rotasSemPadding"

export const ContainerPlataforma = () => {
    const {
        obterProjetoPorId,
        obterProjetoPorIdIsPending,
        obterProjetos,
        obterProjetosIsPending,
        control,
        user,
        obterFotoUser,
        obterFotoUserIsPending,
        avatares,
        avataresIsPending,
    } = useContainerPlataforma()

    const { tituloPagina, exibirSugestao, exibirEquipe } = useControleExibicao()

    return (
        <Styled.Container>
            <Menu
                variante={
                    user.aluno?.tipoUser || user.orientador?.tipoUser || user.empresa?.tipoUser || null
                }
                header={[
                    {
                        foto: user?.empresa?.foto ?? obterFotoUser,
                        nomeUser:
                            user.aluno?.nomeUsuario ??
                            user.orientador?.nomeUsuario ??
                            user.empresa?.nome ??
                            user.visitante?.nome ??
                            "-",
                        quatidadeProjetos:
                            user.aluno?.qtn_projetos ??
                            user.orientador?.qtn_projetos ??
                            user.empresa?.qnt_projetos_patrocinados ??
                            user.visitante?.qnt_projetos_patrocinados ??
                            "0",
                    },
                ]}
                loading={user.empresa ? false : obterFotoUserIsPending}
            />

            <Header
                variante="BlueHeader"
                MobileMenu={false}
            >
                <Stack
                    sx={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2,
                        width: "100%",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ fontSize: { xs: 24, md: 34 } }}
                    >
                        {tituloPagina()}
                    </Typography>
                    {exibirSugestao && (
                        <Input
                            Icon={Search}
                            placeholder="Pesquisar"
                            control={control}
                            name={""}
                            tamanho={"sm"}
                            sx={{
                                width: {
                                    xs: 130,
                                    sm: 300,
                                },
                                height: 35,
                                borderRadius: 10,
                                p: 2,
                            }}
                        />
                    )}
                </Stack>
                <Button
                    tamanho={"lg"}
                    variante="ButtonLinkWhite"
                    icon={UserRound}
                    to="meu-perfil"
                    somenteIcone
                    viewTransition
                />
            </Header>

            <Styled.Content className={useRotasSemPadding() ? "no-padding" : ""}>
                <Outlet />
            </Styled.Content>

            {exibirSugestao && (
                <Styled.CardSugestao>
                    <Typography
                        variant="h6"
                        color="#797979"
                        width={"100%"}
                        textAlign={"center"}
                    >
                        Sugestões
                    </Typography>

                    {obterProjetosIsPending
                        ? [...Array(4)].map((_, index) => (
                              <Stack
                                  key={index}
                                  alignItems="center"
                                  direction="row"
                                  gap={2}
                              >
                                  <Skeleton
                                      variant="circular"
                                      width={50}
                                      height={50}
                                  />
                                  <Stack>
                                      <Skeleton
                                          width={120}
                                          height={20}
                                      />
                                      <Skeleton
                                          width={90}
                                          height={16}
                                      />
                                  </Stack>
                              </Stack>
                          ))
                        : obterProjetos
                              ?.filter((projeto) => projeto.id_projeto !== obterProjetoPorId?.id_projeto)
                              .map((projeto, index) => (
                                  <Stack
                                      key={index}
                                      alignItems="center"
                                      direction="row"
                                      gap={2}
                                  >
                                      <Stack
                                          width={50}
                                          height={50}
                                          sx={{
                                              flexShrink: 0,
                                              borderRadius: "50%",
                                              overflow: "hidden",
                                          }}
                                      >
                                          <img
                                              src={projeto.foto}
                                              alt={projeto.titulo}
                                              width="100%"
                                              height="100%"
                                              style={{ objectFit: "cover" }}
                                          />
                                      </Stack>
                                      <Stack>
                                          <Button
                                              variante="ButtonLinkBlack"
                                              tamanho="lg"
                                              sx={{
                                                  width: "auto",
                                                  height: "auto",
                                              }}
                                              to={`/plataforma-nexus/detalhes-projeto/${projeto.id_projeto}`}
                                              viewTransition
                                          >
                                              <Typography variant="subtitle1">
                                                  {truncateText(projeto.titulo, 15)}
                                              </Typography>
                                              <Typography variant="body2">
                                                  {truncateText(projeto.area, 20)}
                                              </Typography>
                                          </Button>
                                      </Stack>
                                  </Stack>
                              ))}
                    <Typography
                        variant="caption"
                        color="#797979"
                        textAlign={"center"}
                    >
                        Sobre • Ajuda • Privacidade • Termos • Dúvidas Frequentes • Acessibilidade
                    </Typography>
                </Styled.CardSugestao>
            )}
            {exibirEquipe && (
                <Styled.CardEquipe>
                    <Typography
                        variant="h6"
                        color="#797979"
                        width={"100%"}
                        textAlign={"center"}
                    >
                        Equipe
                    </Typography>

                    {avataresIsPending || obterProjetoPorIdIsPending
                        ? [...Array(4)].map((_, index) => (
                              <Stack
                                  key={index}
                                  alignItems="center"
                                  direction="row"
                                  gap={2}
                              >
                                  <Skeleton
                                      variant="circular"
                                      width={50}
                                      height={50}
                                  />
                                  <Stack>
                                      <Skeleton
                                          width={90}
                                          height={20}
                                      />
                                      <Skeleton
                                          width={110}
                                          height={16}
                                      />
                                  </Stack>
                              </Stack>
                          ))
                        : avatares?.map((integrante, index) => (
                              <Stack
                                  key={index}
                                  alignItems="center"
                                  direction="row"
                                  gap={2}
                              >
                                  <Avatar
                                      src={integrante.src}
                                      sx={{ flexShrink: 0, width: 50, height: 50 }}
                                  />
                                  <Stack>
                                      <Typography variant="subtitle1">
                                          {truncateText(integrante.nome, 15)}
                                      </Typography>
                                      <Typography variant="body2">
                                          {truncateText(integrante.email, 18)}
                                      </Typography>
                                  </Stack>
                              </Stack>
                          ))}
                </Styled.CardEquipe>
            )}
        </Styled.Container>
    )
}
