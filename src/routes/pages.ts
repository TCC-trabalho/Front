import { CadastroPage } from "../pages/Auth/Cadastro/CadastroPage";
import { LoginPage } from "../pages/Auth/Login/LoginPage";
import { LadingPage } from "../pages/LadingPage/LadingPage";
import { PaginaNaoEncontrada } from "../pages/PaginaNaoEncontrada/PaginaNaoEncontrada";
import { Empresas } from "../pages/PlataForma/pages/Empresas/Empresas";
import { Perfil } from "../pages/PlataForma/pages/Perfil/Perfil";
import { Projetos } from "../pages/PlataForma/pages/Projetos/Projetos";
import { TelaEmManutencao } from "../pages/TelaEmManutencao/TelaEmManutencao";
import { TelaErro } from "../pages/TelaErro/TelaErro";

export const Paginas = {
  TelaErro,
  PaginaNaoEncontrada,
  TelaEmManutencao,
  LadingPage,
  Auth: {
    LoginPage,
    CadastroPage,
  },
  Plataforma: {
     Projetos,
     Empresas,
     Perfil
  },
};
