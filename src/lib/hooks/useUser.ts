import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type UsuarioLogado = {
  id_orientador?: number;
  id_aluno?: number;
  id_empresa?: number;
  nome?: string;
  nomeUsuario?: string;
  email?: string;
  curso?: string;
  instituicao?: string;
  formacao?: string;
  tipoUser?: "aluno" | "orientador" | "empresa" | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export const useUser = () => {
  const [user, setUser] = useState<UsuarioLogado | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("usuarioLogado");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  return { user };
};

export const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/login");
  };

  return { handleLogout };
};
