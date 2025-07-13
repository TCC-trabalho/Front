import { CadastroPage } from "../pages/Auth/Cadastro/CadastroPage";
import { LoginPage } from "../pages/Auth/Login/LoginPage";
import { LadingPage } from "../pages/LadingPage/LadingPage";
import { PaginaNaoEncontrada } from "../pages/PaginaNaoEncontrada/PaginaNaoEncontrada";
import { TelaErro } from "../pages/TelaErro/TelaErro";

export const Paginas = {
  TelaErro,
  PaginaNaoEncontrada,
  LadingPage,
  Auth: {
    LoginPage,
    CadastroPage,
  },
};
