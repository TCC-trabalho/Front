import { useLocation } from "react-router";

export const useControleExibicao = () => {
    const location = useLocation();

  const path = location.pathname;

  const tituloPagina = () => {

    if (path.includes("/projetos")) return "Projetos";
    if (path.includes("/empresas")) return "Empresas";
    if (path.includes("/apoio")) return "Apoio";
    if (path.includes("/apoiar")) return "Apoiar";
    if (path.includes("/chat")) return "Chat";
    if (path.includes("/meu-projeto")) return "Meu Projeto";
    if (path.includes("/projeto-patrocinados")) return "Projetos Patrocinados";
    if (path.includes("/meu-perfil")) return "Meu Perfil";
    if (path.includes("/configuracoes")) return "Configuracoes";

    return "Plataforma";
  };

  const ocultarRotas = [
    "/apoio",
    "/apoiar",
    "/chat",
    "/meu-projeto",
    "/projeto-patrocinados",
    "/meu-perfil",
    "/configuracoes",
  ];

  const exibirSugestao = !ocultarRotas.some((rota) => path.includes(rota));
  const exibirHeaderMenu = !path.includes("/meu-perfil");

  return{
    tituloPagina,
    exibirSugestao,
    exibirHeaderMenu,
  }
}