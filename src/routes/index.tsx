import { createBrowserRouter, RouterProvider, Outlet, redirect } from "react-router";
import { Paginas } from "./pages";
import { ContainerPlataforma } from "../pages/PlataForma/components/ContainerPlataforma/ContainerPlataforma";


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
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        loader: async () => redirect("conheca-nexus")
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
                element: <ContainerPlataforma />,
                children: [
                    {
                        index: true,
                        loader: async () => redirect("projetos")
                    },
                    {
                        path: "projetos",
                        element: <Paginas.Plataforma.Projetos />,
                    },
                    {
                        path: "empresas",
                        element: <Paginas.Plataforma.Empresas />,
                    },
                    {
                        path: "apoio",
                        element: <></>,
                    },
                    {
                        path: "apoiar",
                        element: <></>,
                    },
                    {
                        path: "chat",
                        element: <></>,
                        children: [
                            {
                                index: true,
                                loader: async () => redirect("/manutencao")
                            }
                        ]
                    },
                    {
                        path: "meu-projeto",
                        element: <></>,
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
                        path: "configuracoes",
                        element: <></>,
                    },
                ],
            },
        ],
    },
]);

const Routes = () => {
    return <RouterProvider router={routes} />;
};

export default Routes;
