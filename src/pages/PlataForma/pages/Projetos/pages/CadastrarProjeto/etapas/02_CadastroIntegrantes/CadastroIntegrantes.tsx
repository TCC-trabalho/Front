import { Stack } from "@mui/material"
import { ProgressHeader } from "../../../../../../../../components/ProgressHeader/ProgressHeader"
import { Button } from "../../../../../../../../components/Button/Button"
import { Input } from "../../../../../../../../components/Input/Input"
import { useCadastroIntegrantes } from "./CadastroIntegrantes.hook"
import { UserMinus } from "lucide-react"

export const CadastroIntegrantes = () => {

    const { control, onSubmit, append, fields, ultimoEmailValido } = useCadastroIntegrantes();

    return (
        <>
            <ProgressHeader
                title="Cadastro de Integrantes"
                subtitle="Adicione integrantes ao seu grupo"
                progress={60}
            />

            <Stack component="form" gap={3} p={3} onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}>
                {fields.map((field, index) => (
                    <Stack
                        key={field.id}
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr auto",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <Input
                            key={field.id}
                            placeholder="Digite o e-mail do integrante"
                            control={control}
                            name={`emailIntegrante.${index}`}
                            tamanho={"sm"}
                            label={`E-mail do Integrante ${index + 1}`}
                            sx={{ width: "100%" }}
                        />
                        <Button
                            variante="ButtonOutlinedRed"
                            tamanho="xl"
                            somenteIcone
                            icon={UserMinus}
                            sx={{ height: 45, width: 45, mt: 2.5 }}
                        />
                    </Stack>
                ))}

                <Stack alignItems={"center"} direction={"row"} gap={2} justifyContent={"center"}>
                    <Button
                        variante="ButtonOutlinedBlue"
                        tamanho={"lg"}
                        disabled={!ultimoEmailValido}
                        onClick={() => append("")}
                    >
                        Adicionar
                    </Button>
                    <Button tamanho={"lg"} type="submit">
                        Cadastrar
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}