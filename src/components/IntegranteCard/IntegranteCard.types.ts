export interface IntegranteCardProps {
    nome: string;
    email: string;
    OnExcluir: () => void;
    loadingExcluir?: boolean;
    disabledExcluir?: boolean;
}