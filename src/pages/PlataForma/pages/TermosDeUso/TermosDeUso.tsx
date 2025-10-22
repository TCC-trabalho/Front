import { Stack, Typography, Divider, Box } from "@mui/material"

export const TermosDeUso = () => {
    return (
        <Stack
            sx={{
                p: { xs: 3, sm: 6 },
                maxWidth: 900,
                mx: "auto",
                textAlign: "justify",
                color: "text.primary",
                gap: 2,
            }}
        >
            <Typography
                variant="h4"
                fontWeight="bold"
                align="center"
            >
                Termos de Uso e Política de Privacidade
            </Typography>

            <Typography
                variant="h6"
                fontWeight="bold"
                mt={2}
            >
                Boas-vindas ao Nexus!
            </Typography>
            <Typography>
                O Nexus é uma plataforma desenvolvida para conectar estudantes e suas criações acadêmicas
                a empresas e instituições interessadas em inovação. Oferece apoio para projetos
                estudantis por meio do contato com empresas parceiras dispostas a patrocinar esses
                projetos.
            </Typography>
            <Typography>
                Os Termos de Uso e a política de privacidade abaixo regem seu acesso e uso do Nexus. O
                Nexus preza pela segurança de suas informações e pelo bom uso da plataforma. É de extrema
                importância que, antes de começar a usar, o usuário leia atentamente os termos para estar
                ciente das condições e do tratamento de seus dados pessoais.
            </Typography>
            <Typography fontWeight="bold">
                IMPORTANTE – Possíveis atualizações dos Termos de Uso e Política de Privacidade não serão
                avisadas. É dever do usuário manter-se atualizado sobre nossas condições.
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography
                variant="h6"
                fontWeight="bold"
            >
                1. Permissões e dados coletados
            </Typography>
            <Typography>
                Sua privacidade é muito importante. Quando você usa os serviços do Nexus, obtemos
                determinadas informações sobre você. Queremos que saiba quais dados temos e como os
                usamos para proporcionar a melhor experiência.
            </Typography>
            <Typography>
                A plataforma tem quatro tipos de usuários: <b>Estudante</b>, <b>Orientador</b>,{" "}
                <b>Empresa</b> e <b>Visitante</b>. Cada tipo possui permissões e dados específicos,
                listados abaixo.
            </Typography>

            <Box>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                >
                    1.1. Para Estudantes
                </Typography>
                <Typography fontWeight="bold">Quais dados coletamos:</Typography>
                <Typography>
                    Nome, e-mail, telefone, data de nascimento, curso e instituição de ensino.
                </Typography>
                <Typography fontWeight="bold">Permissões dentro da plataforma:</Typography>
                <Typography>
                    Cadastrar projetos; receber patrocínios (maiores de 18 anos); pedir apoio às
                    empresas; avaliar empresas.
                </Typography>
            </Box>

            <Box>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                >
                    1.2. Para Orientadores
                </Typography>
                <Typography fontWeight="bold">Quais dados coletamos:</Typography>
                <Typography>Nome, e-mail, telefone e formação.</Typography>
                <Typography fontWeight="bold">Permissões dentro da plataforma:</Typography>
                <Typography>
                    Cadastrar projetos; avaliar empresas; receber patrocínios caso todos os alunos sejam
                    menores de 18 anos.
                </Typography>
            </Box>

            <Box>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                >
                    1.3. Para Empresas
                </Typography>
                <Typography fontWeight="bold">Quais dados coletamos:</Typography>
                <Typography>
                    Nome da empresa, e-mail, telefone, CNPJ, endereço e setor de atuação.
                </Typography>
                <Typography fontWeight="bold">Permissões dentro da plataforma:</Typography>
                <Typography>
                    As empresas podem oferecer apoio por meio de ajuda monetária, divulgação, materiais
                    ou cursos especializantes. No momento, apenas a forma monetária está ativa.
                    Atualizaremos os termos quando novas opções forem adicionadas.
                </Typography>
            </Box>

            <Box>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                >
                    1.4. Para Visitantes
                </Typography>
                <Typography fontWeight="bold">Quais dados coletamos:</Typography>
                <Typography>Nome e e-mail.</Typography>
                <Typography fontWeight="bold">Permissões dentro da plataforma:</Typography>
                <Typography>
                    Apoiar projetos com ajuda monetária. Futuramente, será adicionado o “Apoio da Sorte”,
                    onde um projeto será sorteado para receber apoio.
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography
                variant="h6"
                fontWeight="bold"
            >
                2. Como usamos seus dados?
            </Typography>
            <Typography>
                Os dados coletados são necessários para o bom funcionamento da plataforma. Eles servem
                para:
            </Typography>
            <ul>
                <li>Identificar o usuário dentro da plataforma;</li>
                <li>Oferecer suporte e atendimento;</li>
                <li>Garantir a veracidade das contas, evitando falsos cadastros;</li>
                <li>
                    Para estudantes: a data de nascimento é essencial para permitir o recebimento de
                    patrocínios, pois apenas maiores de 18 anos podem vincular uma conta bancária do
                    Mercado Pago ao projeto.
                </li>
            </ul>

            <Typography
                mt={3}
                variant="body2"
                color="text.secondary"
                align="center"
            >
                Nexus © {new Date().getFullYear()} — Todos os direitos reservados.
            </Typography>
        </Stack>
    )
}
