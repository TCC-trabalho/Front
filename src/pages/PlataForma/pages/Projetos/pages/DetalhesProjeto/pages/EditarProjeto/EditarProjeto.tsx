import { Skeleton, Stack } from "@mui/material"
import { useEditarProjeto } from "./EditarProjeto.hook"
import { Input } from "../../../../../../../../components/Input/Input"
import { Select } from "../../../../../../../../components/select/Select"
import { Button } from "../../../../../../../../components/Button/Button"
import { ProjetoAtualizado } from "./modais/ProjetoAtualizado/ProjetoAtualizado"
import { ChevronLeft } from "lucide-react"

export const EditarProjeto = () => {
    const {
        projetosIsloading,
        detalhes,
        control,
        onSubmit,
        openModal,
        setOpenModal,
        atualizarProjeto,
        idProjeto,
    } = useEditarProjeto()

    return (
        <>
            <Stack
                width={{ xs: "95%", md: "45%" }}
                pt={4}
                gap={2}
                pb={2}
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
                    <img
                        src={detalhes?.foto}
                        alt=""
                        width={"100%"}
                        height={400}
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
                                disabled={atualizarProjeto}
                            />
                            <Input
                                control={control}
                                name="area"
                                tamanho="sm"
                                label="Area"
                                disabled={atualizarProjeto}
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
                            disabled={atualizarProjeto}
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
                            label="Descrição"
                            multiline
                            rows={4}
                            disabled={atualizarProjeto}
                        />
                        <Input
                            control={control}
                            name="objetivo"
                            tamanho="md"
                            label="Objetivo"
                            multiline
                            rows={4}
                            disabled={atualizarProjeto}
                        />
                        <Input
                            control={control}
                            name="justificativa"
                            tamanho="md"
                            label="Justificativa"
                            multiline
                            rows={4}
                            disabled={atualizarProjeto}
                        />
                    </>
                )}
            </Stack>
            <Stack
                direction={"row"}
                gap={4}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                    position: "fixed",
                    bottom: 16,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 1000,
                }}
            >
                <Button
                    tamanho="lg"
                    icon={ChevronLeft}
                    to={`/plataforma-nexus/detalhes-projeto/${idProjeto}`}
                    viewTransition
                    espacamento={20}
                >
                    Voltar
                </Button>

                <Button
                    tamanho="lg"
                    loading={atualizarProjeto}
                    onClick={onSubmit}
                    espacamento={20}
                >
                    Salvar Alterações
                </Button>
            </Stack>

            <ProjetoAtualizado
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    )
}
