import { CadastroPage } from "../pages/Auth/Cadastro/CadastroPage"
import { LoginPage } from "../pages/Auth/Login/LoginPage"
import { LadingPage } from "../pages/LadingPage/LadingPage"
import { PaginaNaoEncontrada } from "../pages/PaginaNaoEncontrada/PaginaNaoEncontrada"
import { ApoiarProjeto } from "../pages/PlataForma/pages/ApoiarProjeto/ApoiarProjeto"
import { Configuracoes } from "../pages/PlataForma/pages/Configuracoes/Configuracoes"
import { Empresas } from "../pages/PlataForma/pages/Empresas/Empresas"
import { DetalhesEmpresa } from "../pages/PlataForma/pages/Empresas/pages/DetalhesEmpresa/DetalhesEmpresa"
import { EditarPerfil } from "../pages/PlataForma/pages/Perfil/pages/EditarPerfil/EditarPerfil"
import { Perfil } from "../pages/PlataForma/pages/Perfil/Perfil"
import { CadastroGrupo } from "../pages/PlataForma/pages/Projetos/pages/CadastrarProjeto/etapas/01_CadastroGrupo/CadastroGrupo"
import { CadastroIntegrantes } from "../pages/PlataForma/pages/Projetos/pages/CadastrarProjeto/etapas/02_CadastroIntegrantes/CadastroIntegrantes"
import { CadastroProjeto } from "../pages/PlataForma/pages/Projetos/pages/CadastrarProjeto/etapas/03_CadastroProjeto/CadastroProjeto"
import { DetalhesProjeto } from "../pages/PlataForma/pages/Projetos/pages/DetalhesProjeto/DetalhesProjeto"
import { EditarProjeto } from "../pages/PlataForma/pages/Projetos/pages/DetalhesProjeto/pages/EditarProjeto/EditarProjeto"
import { Projetos } from "../pages/PlataForma/pages/Projetos/Projetos"
import { TelaEmManutencao } from "../pages/TelaEmManutencao/TelaEmManutencao"
import { TelaErro } from "../pages/TelaErro/TelaErro"

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
        ProjetosPage: { 
            Projetos,
            DetalhesProjeto,
            EditarProjeto,
            CadastrarProjeto: {
                Etapas: {
                    CadastroGrupo,
                    CadastroIntegrantes,
                    CadastroProjeto,
                },
            },
        },
        EmpresasPage: {
            Empresas,
            DetalhesEmpresa,
            ApoiarProjeto,
        },
        Perfil,
        EditarPerfil,
        Configuracoes
    },
}
