import { createBrowserRouter, RouterProvider } from "react-router"

const routes = createBrowserRouter([
    {
        element: <></>,
        errorElement: <>erro :/</>,
        children: [
            {
                path: "*",
                element: <>n encotrei</>
            },
            {
                path: "/",
                element: <>deslogado</>,
                children: [
                    {
                        path: "conheca-nexus",
                        element: <></>
                    },
                    {
                        path: "login",
                        element: <></>
                    },
                    {
                        path: "cadastro",
                        element: <></>
                    }
                ]
            },
            {
                element: <>logado</>,
                path: "plataforma-nexus",
                children: [
                    {
                        path: "inicio",
                        element: <></>
                    },
                ]
            }
        ]
    }
])

const Routes = () => {
    return <RouterProvider router={routes} />
}

export default Routes   