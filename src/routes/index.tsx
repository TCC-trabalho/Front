import { createBrowserRouter, RouterProvider, Outlet, redirect } from "react-router"
import { Paginas } from "./pages"
import { ContainerPlataforma } from "../pages/PlataForma/components/ContainerPlataforma/ContainerPlataforma"
import { PrivateRoute, PublicRoute } from "./utils"
import { CadastrarProjeto } from "../pages/PlataForma/pages/Projetos/pages/CadastrarProjeto/CadastrarProjeto"

const routes = createBrowserRouter([
    {
        element: <Outlet />,
        errorElement: <Paginas.TelaErro />,
        children: [
            {
                path: "*",
                element: <Paginas.PaginaNaoEncontrada />,
            },
            {
                path: "/manutencao",
                element: <Paginas.TelaEmManutencao />,
            },
            {
                path: "/",
                element: <PublicRoute />,
                children: [
                    {
                        index: true,
                        loader: async () => redirect("conheca-nexus"),
                    },
                    {
                        path: "conheca-nexus",
                        element: <Paginas.LadingPage />,
                    },
                    {
                        path: "login",
                        element: <Paginas.Auth.LoginPage />,
                    },
                    {
                        path: "cadastro",
                        element: <Paginas.Auth.CadastroPage />,
                    },
                ],
            },
            {
                path: "plataforma-nexus",
                element: <PrivateRoute />,
                children: [
                    {
                        path: "",
                        element: <ContainerPlataforma />,
                        children: [
                            {
                                index: true,
                                loader: async () => redirect("projetos"),
                            },
                            {
                                path: "projetos",
                                element: <Paginas.Plataforma.ProjetosPage.Projetos />,
                            },
                            {
                                path: "detalhes-projeto/:idProjeto",
                                element: <Paginas.Plataforma.ProjetosPage.DetalhesProjeto />,
                            },
                            {
                                path: "detalhes-projeto/:idProjeto/editar",
                                element: <Paginas.Plataforma.ProjetosPage.EditarProjeto />,
                            },
                            {
                                path: "empresas",
                                element: <Paginas.Plataforma.EmpresasPage.Empresas />,
                            },
                            {
                                path: "detalhes-empresa/:idEmpresa",
                                element: <Paginas.Plataforma.EmpresasPage.DetalhesEmpresa />,
                            },
                            {
                                path: "apoiar-projeto/:idProjeto",
                                element: <Paginas.Plataforma.EmpresasPage.ApoiarProjeto />,
                            },
                            {
                                path: "chat",
                                element: <></>,
                                children: [
                                    {
                                        index: true,
                                        loader: async () => redirect("/manutencao"),
                                    },
                                ],
                            },
                            {
                                path: "projeto-patrocinados",
                                element: <></>,
                            },
                            {
                                path: "meu-perfil",
                                element: <Paginas.Plataforma.Perfil />,
                            },
                            {
                                path: "editar-perfil/:id",
                                element: <Paginas.Plataforma.EditarPerfil />,
                            },
                            {
                                path: "editar-empresa/:id",
                                element: <Paginas.Plataforma.EmpresasPage.EditarEmpresa />,
                            },
                            {
                                path: "configuracoes",
                                element: <Paginas.Plataforma.Configuracoes/>,
                            },
                        ],
                    },
                    {
                        path: "cadastrar-projeto",
                        element: <CadastrarProjeto />,
                        children: [
                            {
                                index: true,
                                element: (
                                    <Paginas.Plataforma.ProjetosPage.CadastrarProjeto.Etapas.CadastroGrupo />
                                ),
                            },
                            {
                                path: "cadastro-integrantes/:idGrupo",
                                element: (
                                    <Paginas.Plataforma.ProjetosPage.CadastrarProjeto.Etapas.CadastroIntegrantes />
                                ),
                            },
                            {
                                path: "cadastro-projeto/:idGrupo",
                                element: (
                                    <Paginas.Plataforma.ProjetosPage.CadastrarProjeto.Etapas.CadastroProjeto />
                                ),
                            },
                        ],
                    },
                ],
            },
        ],
    },
])

const Routes = () => {
    return <RouterProvider router={routes} />
}

export default Routes
