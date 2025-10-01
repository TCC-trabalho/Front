import { Skeleton, Stack } from "@mui/material"
import { useEditarProjeto } from "./EditarProjeto.hook"
import { Input } from "../../../../../../../../components/Input/Input"
import { Select } from "../../../../../../../../components/select/Select"
import { Button } from "../../../../../../../../components/Button/Button"
import { ProjetoAtualizado } from "./modais/ProjetoAtualizado/ProjetoAtualizado"
import { ChevronLeft } from "lucide-react"
import { InputFoto } from "../../../../../../../../components/InputFoto/InputFoto"

export const EditarProjeto = () => {
    const {
        projetosIsloading,
        detalhes,
        control,
        onSubmit,
        openModal,
        setOpenModal,
        atualizarProjetoLoading,
        idProjeto,
    } = useEditarProjeto()

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
                {projetosIsloading ? (
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
                        label="Foto do projeto"
                        name="foto"
                        control={control}
                        disabled={atualizarProjetoLoading}
                        initialUrl={detalhes?.foto}
                    />
                )}

                <Stack
                    width={{ xs: "100%" }}
                    gap={2}
                >
                    {projetosIsloading ? (
                        <>
                            <Skeleton
                                width={200}
                                height={35}
                            />
                        </>
                    ) : (
                        <>
                            <Input
                                control={control}
                                name="titulo"
                                tamanho="sm"
                                label="Título"
                                disabled={atualizarProjetoLoading}
                            />
                            <Input
                                control={control}
                                name="area"
                                tamanho="sm"
                                label="Area"
                                disabled={atualizarProjetoLoading}
                            />
                        </>
                    )}
                </Stack>

                {projetosIsloading ? (
                    <>
                        <Skeleton
                            width={100}
                            height={25}
                        />
                    </>
                ) : (
                    <>
                        <Select
                            control={control}
                            name="status"
                            label="Status"
                            placeholder="Selecione sua instituição"
                            tamanho="md"
                            options={[
                                { value: "ativo", label: "Ativo" },
                                { value: "inativo", label: "Inativo" },
                            ]}
                            disabled={atualizarProjetoLoading}
                        />
                    </>
                )}

                {projetosIsloading ? (
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
                    </>
                ) : (
                    <>
                        <Input
                            control={control}
                            name="descricao"
                            tamanho="md"
                            label="Resumo"
                            multiline
                            rows={4}
                            disabled={atualizarProjetoLoading}
                        />
                        <Input
                            control={control}
                            name="objetivo"
                            tamanho="md"
                            label="Objetivo"
                            multiline
                            rows={4}
                            disabled={atualizarProjetoLoading}
                        />
                        <Input
                            control={control}
                            name="justificativa"
                            tamanho="md"
                            label="Justificativa"
                            multiline
                            rows={4}
                            disabled={atualizarProjetoLoading}
                        />
                    </>
                )}
                <Stack
                    direction={"row"}
                    gap={1}
                >
                    <Button
                        variante="ButtonOutlinedBlue"
                        tamanho="md"
                        icon={ChevronLeft}
                        to={`/plataforma-nexus/detalhes-projeto/${idProjeto}`}
                        viewTransition
                        espacamento={20}
                    >
                        Voltar
                    </Button>

                    <Button
                        variante="ButtonBlue"
                        tamanho="md"
                        loading={atualizarProjetoLoading}
                        onClick={onSubmit}
                        espacamento={20}
                    >
                        Salvar Alterações
                    </Button>
                </Stack>
            </Stack>

            <ProjetoAtualizado
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    )
}
