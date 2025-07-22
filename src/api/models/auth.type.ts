// Login

export type LoginPayload = {
  tipo: "aluno" | "orientador" | "empresa";
  email?: string;
  cnpj?: string;
  senha: string;
};

// Cadastro

export type CadastroAluno = {
  nome: string;
  nomeUsuario: string;
  cpf: string;
  rg: string;
  email: string;
  nascimento: Date;
  telefone: string;
  curso: string;
  inst_ensino: string;
  senha: string;
};

export type CadastroProfessor = {
  nome: string;
  nomeUsuario: string;
  cpf: string;
  rg: string;
  email: string;
  telefone: string;
  formacao: string;
  senha: string;
};

export type CadastroEmpresa = {
  nome: string;
  descricao?: string;
  setor: string;
  cnpj: string;
  endereco: string;
  email: string;
  telefone: string
  senha: string;
};
