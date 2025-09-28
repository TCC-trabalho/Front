import { Skeleton, Stack } from "@mui/material"
import { useEditarEmpresa } from "./EditarEmpresa.hook"
import { InputFoto } from "../../../../../../components/InputFoto/InputFoto"
import { Select } from "../../../../../../components/select/Select"
import { Button } from "../../../../../../components/Button/Button"
import { Input } from "../../../../../../components/Input/Input"
import { ChevronLeft } from "lucide-react"

export const EditarEmpresa = () => {
    const { empresa, isEmpresaLoading, control, onSubmit, atualizarEmpresaLoading } = useEditarEmpresa()

    return (
        <>
            <Stack
                width={{ xs: "95%", md: "45%" }}
                gap={2}
                sx={{
                    gap: 2,
                    bgcolor: "#FFF",
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                {isEmpresaLoading ? (
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={400}
                        sx={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }}
                    />
                ) : (
                    <InputFoto
                        label="Foto da sua empresa"
                        name="foto"
                        control={control}
                        disabled={atualizarEmpresaLoading}
                        initialUrl={empresa?.foto}
                    />
                )}

                {isEmpresaLoading ? (
                    <>
                        <Skeleton
                            width={100}
                            height={25}
                        />
                    </>
                ) : (
                    <Select
                        control={control}
                        name="setor"
                        label="Setor"
                        placeholder="Selecione seu setor"
                        options={[
                            { value: "Agropecuario", label: "Agropecuário" },
                            { value: "Tecnologia", label: "Tecnologia" },
                            { value: "Educacao", label: "Educação" },
                            { value: "Saude", label: "Saúde" },
                            { value: "Financeiro", label: "Financeiro" },
                            { value: "Industria", label: "Indústria" },
                            { value: "Comercio", label: "Comércio" },
                            { value: "Logistica", label: "Logística" },
                            { value: "AdministracaoPublica", label: "Administração Pública" },
                            { value: "ConstrucaoCivil", label: "Construção Civil" },
                            { value: "Energia", label: "Energia" },
                            { value: "Transportes", label: "Transportes" },
                            { value: "TurismoEHotelaria", label: "Turismo e Hotelaria" },
                        ]}
                    />
                )}

                {isEmpresaLoading ? (
                    <>
                        <Skeleton
                            width="100%"
                            height={20}
                        />
                        <Skeleton
                            width="100%"
                            height={20}
                        />
                        <Skeleton
                            width="90%"
                            height={20}
                        />
                        <Skeleton
                            width="90%"
                            height={40}
                        />
                    </>
                ) : (
                    <>
                        <Input
                            tamanho="sm"
                            control={control}
                            name="senha"
                            label="Senha"
                            type="password"
                            placeholder="Nova Senha"
                            disabled={atualizarEmpresaLoading}
                        />
                        <Input
                            tamanho="sm"
                            control={control}
                            name="nome"
                            label="Nome"
                            disabled={atualizarEmpresaLoading}
                        />

                        <Input
                            type="tel"
                            control={control}
                            name={"telefone"}
                            tamanho={"sm"}
                            label="Telefone"
                            mask="(99) 99999-9999"
                            fullWidth
                            disabled={atualizarEmpresaLoading}
                        />

                        <Input
                            control={control}
                            name="descricao"
                            tamanho="md"
                            label="Descrição"
                            multiline
                            rows={4}
                            disabled={atualizarEmpresaLoading}
                        />
                    </>
                )}
                <Stack
                    alignItems={"start"}
                    direction={"row"}
                    gap={2}
                >
                    <Button
                        variante="ButtonOutlinedBlue"
                        tamanho="md"
                        icon={ChevronLeft}
                        to={`/plataforma-nexus/meu-perfil`}
                        viewTransition
                        espacamento={20}
                    >
                        Voltar
                    </Button>
                    <Button
                        variante="ButtonBlue"
                        tamanho="md"
                        onClick={onSubmit}
                        loading={atualizarEmpresaLoading}
                        espacamento={20}
                    >
                        Salvar Alterações
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}
