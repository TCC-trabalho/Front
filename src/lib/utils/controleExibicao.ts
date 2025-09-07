import { useLocation } from "react-router"

export const useControleExibicao = () => {
    const location = useLocation()

    const path = location.pathname

    const tituloPagina = () => {
        if (path.includes("/projetos")) return "Projetos"
        if (path.includes("/editar")) return "Editar"
        if (path.includes("/empresas")) return "Empresas"
        if (path.includes("/apoiar-projeto/")) return "Apoio"
        if (path.includes("/chat")) return "Chat"
        if (path.includes("/meu-perfil")) return "Meu Perfil"
        if (path.includes("/editar-perfil")) return "Editar Perfil"
        if (path.includes("/configuracoes")) return "Configurações"

        return "Plataforma"
    }

    const ocultarRotas = [
        "/apoio",
        "/apoiar-projeto/",
        "/chat",
        "/projeto-patrocinados",
        "/meu-perfil",
        "/editar-perfil/",
        "/detalhes-projeto/",
        "/detalhes-empresa/",
        "/configuracoes",
    ]

    const ocultarDetalhes = ["/meu-perfil", "/detalhes-projeto/", "/editar-perfil/", "/apoiar-projeto/"]

    const exibirSugestao = !ocultarRotas.some((rota) => path.includes(rota))
    const exibirEquipe = path.includes("/detalhes-projeto/")
    const ocultarDetalhesMenu = !ocultarDetalhes.some((rota) => path.includes(rota))

    return {
        tituloPagina,
        exibirSugestao,
        exibirEquipe,
        ocultarDetalhesMenu,
    }
}
