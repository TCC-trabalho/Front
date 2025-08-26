import { Skeleton, Stack, Typography } from "@mui/material"
import { Header } from "../../../../components/Header/Header"
import { Menu } from "../../../../components/Menu/Menu"
import * as Styled from "./ContainerPlataforma.styled"
import { Input } from "../../../../components/Input/Input"
import { Bell, CircleUserRound, Search } from "lucide-react"
import { Button } from "../../../../components/Button/Button"
import { Outlet } from "react-router"
import { useContainerPlataforma } from "./ContainerPlataforma.hook"
import { useControleExibicao } from "../../../../lib/utils/controleExibicao"
import { truncateText } from "../../../../lib/utils/truncateText"

export const ContainerPlataforma = () => {
    const {
        obterProjetoPorId,
        obterProjetoPorIdIsPending,
        obterProjetos,
        obterProjetosIsPending,
        control,
        user,
    } = useContainerPlataforma()
    const { tituloPagina, exibirSugestao, exibirEquipe } = useControleExibicao()

    return (
        <Styled.Container>
            <Menu
                variante={user?.tipoUser ?? null}
                header={[
                    {
                        foto: user?.foto ?? "https://via.placeholder.com/80",
                        nomeUser: user?.nomeUsuario ?? "Usuário",
                        quatidadeProjetos: user?.qtn_projetos ?? "",
                    },
                ]}
            />

            <Header
                variante="BlueHeader"
                MobileMenu={false}
            >
                <Stack
                    sx={{
                        flexDirection: "row",
                        justifyContent: "end",
                        alignItems: "center",
                        gap: 2,
                        width: {
                            xs: "90%",
                            lg: "60%",
                        },
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ fontSize: { xs: 24, md: 34 } }}
                    >
                        {tituloPagina()}
                    </Typography>
                    <Input
                        Icon={Search}
                        placeholder="Pesquisar"
                        control={control}
                        name={""}
                        tamanho={"sm"}
                        sx={{
                            width: {
                                xs: 60,
                                sm: 300,
                            },
                            height: 35,
                            borderRadius: 10,
                            p: 2,
                        }}
                    />
                </Stack>
                <Stack
                    direction={"row"}
                    gap={2}
                >
                    <Button
                        tamanho={"lg"}
                        variante="ButtonLinkWhite"
                        icon={Bell}
                        somenteIcone
                    />
                    <Button
                        tamanho={"lg"}
                        variante="ButtonLinkWhite"
                        icon={CircleUserRound}
                        to="meu-perfil"
                        somenteIcone
                        viewTransition
                    />
                </Stack>
            </Header>

            <Styled.Content>
                <Outlet />
            </Styled.Content>

            {exibirSugestao && (
                <Styled.CardSugestao>
                    <Typography
                        variant="h6"
                        color="#797979"
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
                                          width={180}
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
                                      <Skeleton
                                          variant="circular"
                                          width={50}
                                          height={50}
                                          sx={{ flexShrink: 0 }}
                                      />
                                      <Stack>
                                          <Typography variant="subtitle1">
                                              {truncateText(projeto.titulo, 15)}
                                          </Typography>
                                          <Typography variant="body2">
                                              {truncateText(projeto.area, 20)}
                                          </Typography>
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

                    {obterProjetoPorIdIsPending
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
                                          width={180}
                                          height={16}
                                      />
                                  </Stack>
                              </Stack>
                          ))
                        : obterProjetoPorId?.grupo?.integrantes?.map((integrante, index) => (
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
                                      sx={{ flexShrink: 0 }}
                                  />
                                  <Stack>
                                      <Typography variant="subtitle1">
                                          {truncateText(integrante.nome, 15)}
                                      </Typography>
                                      <Typography variant="body2">
                                          {truncateText(integrante.email, 20)}
                                      </Typography>
                                  </Stack>
                              </Stack>
                          ))}
                          
                </Styled.CardEquipe>
            )}
        </Styled.Container>
    )
}
