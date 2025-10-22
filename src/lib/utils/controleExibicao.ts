import { useLocation } from "react-router"

export const useControleExibicao = () => {
    const location = useLocation()

    const path = location.pathname

    const tituloPagina = () => {
        if (path.includes("/projetos")) return "Projetos"
        if (path.includes("/editar-perfil")) return "Editar Perfil"
        if (path.includes("/editar-grupo")) return "Editar Grupo"
        if (path.includes("/editar")) return "Editar Perfil"
        if (path.includes("/empresas")) return "Empresas"
        if (path.includes("/apoiar-projeto/")) return "Apoio"
        if (path.includes("/solicitar-apoio")) return "Solicitar Apoio"
        if (path.includes("/chat")) return "Chat"
        if (path.includes("/meu-perfil")) return "Meu Perfil"
        if (path.includes("/configuracoes")) return "Configurações da conta"
        if (path.includes("/termos-de-uso")) return "Termos de Uso"

        return "Conectando ideias a oportunidades"
    }

    const ocultarRotas = [
        "/apoio",
        "/apoiar-projeto/",
        "/chat",
        "/projeto-patrocinados",
        "/meu-perfil",
        "/editar-perfil/",
        "/editar-empresa/",
        "/detalhes-projeto/",
        "/detalhes-empresa/",
        "/configuracoes",
        "/solicitar-apoio",
        "/termos-de-uso",
    ]

    const ocultarDetalhes = [
        "/meu-perfil",
        "/detalhes-projeto/",
        "/editar-perfil/",
        "/editar-empresa/",
        "/apoiar-projeto/",
        "/solicitar-apoio",
        "/termos-de-uso",
    ]

    const exibirSugestao = !ocultarRotas.some((rota) => path.includes(rota))
    const exibirEquipe = path.includes("/detalhes-projeto/") && !path.includes("/editar-grupo")
    const ocultarDetalhesMenu = !ocultarDetalhes.some((rota) => path.includes(rota))

    return {
        tituloPagina,
        exibirSugestao,
        exibirEquipe,
        ocultarDetalhesMenu,
    }
}
