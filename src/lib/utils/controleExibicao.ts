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
    if (path.includes("/meu-projeto")) return "Meus Projetos";
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
    "/detalhes-projeto/",
    "/configuracoes",
  ];

  const ocultarDetalhes = ["/meu-perfil", "/detalhes-projeto/"];

  const exibirSugestao = !ocultarRotas.some((rota) => path.includes(rota));
  const exibirEquipe = path.includes("/detalhes-projeto/");
  const ocultarDetalhesMenu = !ocultarDetalhes.some((rota) =>
    path.includes(rota)
  );

  return {
    tituloPagina,
    exibirSugestao,
    exibirEquipe,
    ocultarDetalhesMenu,
  };
};
