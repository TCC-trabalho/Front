import { createBrowserRouter, RouterProvider, Outlet, redirect } from "react-router";
import { Paginas } from "./pages";


const routes = createBrowserRouter([
    {
        element: <Outlet />,
        errorElement: <div>Erro :/</div>,
        children: [
            {
                path: "*",
                element: <div>Página não encontrada</div>,
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
                        element: <Paginas.Auth.LoginPage/>,
                    },
                    {
                        path: "cadastro",
                        element: <Paginas.Auth.CadastroPage/>,
                    },
                ],
            },
            {
                path: "plataforma-nexus",
                element: <Outlet />,
                children: [
                    {
                        path: "inicio",
                        element: <div>Bem-vindo à plataforma Nexus (logado)</div>,
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
