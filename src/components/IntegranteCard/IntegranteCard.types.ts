export interface IntegranteCardProps {
    nome: string;
    email: string;
    OnExcluir: () => void;
    disabledExcluir?: boolean;
}