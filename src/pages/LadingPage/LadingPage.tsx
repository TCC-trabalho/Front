import { Box, Divider, Stack, Typography } from "@mui/material"
import * as Styled from "./LadingPage.styled"
import { Button } from "../../components/Button/Button"
import {
    BriefcaseBusiness,
    ChevronLeft,
    ChevronRight,
    CircleUser,
    Github,
    GraduationCap,
    HandHelping,
    Handshake,
    Instagram,
    Linkedin,
    LogIn,
} from "lucide-react"
import { motion } from "framer-motion"
import { InfoCard } from "../../components/InfoCard/InfoCard"
import { AboutProject, BackGroud } from "../../assets"
import { Header } from "../../components/Header/Header"
import { MotionAnimation } from "../../lib/utils/motion"

export const LadingPage = () => {
    return (
        <Styled.Container>
            <Header
                variante={"LigthHeader"}
                logo
            >
                <Stack
                    sx={{
                        alignItems: "center",
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        gap: 2,
                    }}
                >
                    <Button
                        tamanho={"md"}
                        variante="ButtonLink"
                        component={"a"}
                        href="#sobre"
                    >
                        Sobre
                    </Button>
                    <Button
                        tamanho={"md"}
                        variante="ButtonLink"
                        component={"a"}
                        href="#pqNexus"
                    >
                        Por que Nexus?
                    </Button>
                    <Button
                        tamanho={"md"}
                        variante="ButtonLink"
                        component={"a"}
                        href="#comoFunciona"
                    >
                        Como funciona
                    </Button>
                    <Button
                        tamanho={"md"}
                        variante="ButtonLink"
                        component={"a"}
                        href="#equipe"
                    >
                        Equipe
                    </Button>
                </Stack>
                <Stack
                    sx={{
                        gap: 3,
                        alignItems: "center",
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                    }}
                >
                    <Button
                        tamanho={"md"}
                        variante="ButtonOutlinedBlue"
                        to="/login"
                        viewTransition
                        espacamento={10}
                    >
                        Login
                    </Button>
                    <Button
                        tamanho={"md"}
                        variante="ButtonRed"
                        to="/cadastro"
                        viewTransition
                        espacamento={10}
                    >
                        Cadastrar-se
                    </Button>
                </Stack>
            </Header>
            <Styled.Session
                sx={{
                    position: "relative",
                    backgroundImage: "linear-gradient(#064B72, #0B6091)",
                    color: "#FFFCF5",
                    overflow: "hidden",
                }}
            >
                <Stack className="fundo">
                    <BackGroud
                        width="90%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                    />
                </Stack>

                <Stack
                    gap={5}
                    justifyContent={"center"}
                    sx={{ flex: 1, zIndex: 1, position: "relative" }}
                    component={motion.section}
                    initial={MotionAnimation.fadeInVariant.hidden}
                    whileInView={MotionAnimation.fadeInVariant.visible}
                    viewport={MotionAnimation.defaultViewport}
                >
                    <Stack gap={2}>
                        <Typography
                            variant="h1"
                            fontWeight={600}
                            width="90%"
                            sx={{ fontSize: { xs: 50, sm: 72 } }}
                        >
                            Conectando ideias brilhantes com patrocinadores poderosos
                        </Typography>
                        <Typography
                            variant="h4"
                            fontWeight={100}
                            sx={{ fontSize: { xs: 15, sm: 25 } }}
                        >
                            O Nexus preenche a lacuna entre projetos escolares inovadores e empresas que
                            buscam investir no próximo grande projeto.
                        </Typography>
                    </Stack>

                    <Button
                        tamanho={"xl"}
                        variante="ButtonRed"
                        icon={LogIn}
                        to="/login"
                        viewTransition
                        ladoIcon="direita"
                        sx={{ width: 200 }}
                    >
                        Começar
                    </Button>
                </Stack>
            </Styled.Session>

            <Styled.Session
                id="sobre"
                sx={{
                    backgroundColor: "#B83229",
                    flexDirection: {
                        xs: "column-reverse",
                        lg: "row",
                    },
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#FFFCF5",
                    gap: 10,
                }}
            >
                <Box
                    sx={{ width: { xs: 400, sm: 500 } }}
                    component={motion.div}
                    initial={MotionAnimation.fadeUpVariant.hidden}
                    whileInView={MotionAnimation.fadeUpVariant.visible}
                    viewport={MotionAnimation.defaultViewport}
                >
                    <AboutProject width="100%" />
                </Box>

                <Stack
                    sx={{ alignItems: "center", flex: 1 }}
                    gap={2}
                    component={motion.section}
                    initial={MotionAnimation.fadeInVariant.hidden}
                    whileInView={MotionAnimation.fadeInVariant.visible}
                    viewport={MotionAnimation.defaultViewport}
                >
                    <Typography
                        variant="h3"
                        fontWeight={600}
                    >
                        Sobre o Projeto
                    </Typography>
                    <Typography
                        variant="h5"
                        fontWeight={100}
                        textAlign={"center"}
                    >
                        O Nexus é uma plataforma desenvolvida para conectar estudantes e suas criações
                        acadêmicas a empresas e instituições interessadas em inovação. Com um ambiente
                        intuitivo e acessível, o projeto busca valorizar o potencial dos jovens talentos,
                        aproximando o universo educacional do mercado profissional. Por meio da
                        apresentação detalhada de projetos — com textos, imagens e vídeos — e de recursos
                        que facilitam a comunicação direta, o Nexus transforma boas ideias em
                        oportunidades reais de parceria, patrocínio e crescimento.
                    </Typography>
                </Stack>
            </Styled.Session>

            <Styled.Session
                gap={10}
                id="pqNexus"
            >
                <Stack
                    textAlign={"center"}
                    gap={2}
                    color={"#05334A"}
                    component={motion.section}
                    initial={MotionAnimation.fadeInVariant.hidden}
                    whileInView={MotionAnimation.fadeInVariant.visible}
                    viewport={MotionAnimation.defaultViewport}
                >
                    <Typography
                        variant="h3"
                        fontWeight={600}
                    >
                        Por que escolher o Nexus?
                    </Typography>

                    <Typography
                        variant="h5"
                        fontWeight={100}
                    >
                        Nossa plataforma oferece benefícios exclusivos para estudantes e empresas
                    </Typography>
                </Stack>

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    gap={5}
                    alignItems={"center"}
                    component={motion.section}
                    initial={MotionAnimation.sobeDesceVariant.initial}
                    whileInView={MotionAnimation.sobeDesceVariant.animate}
                    viewport={MotionAnimation.defaultViewport}
                >
                    <InfoCard
                        variante={"White"}
                        cor={"vermelho"}
                        header
                        title="Inovação"
                        sx={{ flex: 1, textAlign: "center" }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight={100}
                        >
                            Projetos estudantis ganham visibilidade e mostram seu potencial inovador com
                            descrições, imagens e vídeos completos.
                        </Typography>
                    </InfoCard>

                    <InfoCard
                        variante={"White"}
                        cor={"azul"}
                        header
                        title="Encontre Talentos"
                        sx={{ flex: 1, textAlign: "center" }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight={100}
                        >
                            Empresas podem visualizar perfis detalhados de estudantes criativos e
                            engajados em projetos de alto impacto.
                        </Typography>
                    </InfoCard>

                    <InfoCard
                        variante={"White"}
                        cor={"vermelho"}
                        header
                        title="Patrocínios Garantido"
                        sx={{ flex: 1, textAlign: "center" }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight={100}
                        >
                            Facilite o investimento em projetos promissores com apresentação clara e
                            atrativa para patrocinadores.
                        </Typography>
                    </InfoCard>
                </Stack>
            </Styled.Session>

            <Styled.Session
                id="comoFunciona"
                gap={10}
                sx={{
                    position: "relative",
                    backgroundImage: "linear-gradient(#064B72, #0B6091)",
                    color: "#FFFCF5",
                    overflow: "hidden",
                }}
            >
                <Stack className="fundo">
                    <BackGroud
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                    />
                </Stack>

                <Stack
                    textAlign={"center"}
                    gap={2}
                    color="#FFFCF5"
                    zIndex={1}
                    component={motion.section}
                    initial={MotionAnimation.fadeInVariant.hidden}
                    whileInView={MotionAnimation.fadeInVariant.visible}
                    viewport={MotionAnimation.defaultViewport}
                >
                    <Typography
                        variant="h3"
                        fontWeight={600}
                    >
                        Como funciona o Nexus
                    </Typography>
                    <Typography
                        variant="h5"
                        fontWeight={100}
                    >
                        Um processo simples para conectar projetos inovadores com potenciais
                        patrocinadores
                    </Typography>
                </Stack>

                <Stack
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(1, 1fr)",
                            sm: "repeat(2, 1fr)",
                        },
                        gap: 5,
                        justifyItems: "center",
                        zIndex: 1,
                    }}
                    component={motion.section}
                    initial={MotionAnimation.fadeJumpVariant.hidden}
                    whileInView={MotionAnimation.fadeJumpVariant.visible}
                    viewport={MotionAnimation.defaultViewport}
                >
                    <InfoCard
                        variante={"Transparent"}
                        cor={"branca"}
                        sx={{ flex: 1, textAlign: "center" }}
                    >
                        <Stack
                            gap={2}
                            color="#FFFCF5"
                        >
                            <Stack
                                gap={2}
                                sx={{ alignItems: { xs: "center", md: "unset" } }}
                            >
                                <Stack className="indice">
                                    <GraduationCap size={35} />
                                </Stack>
                                <Typography
                                    variant="h4"
                                    fontWeight={600}
                                >
                                    Alunos criam perfis
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography
                                    variant="h5"
                                    fontWeight={100}
                                >
                                    Estudantes e equipes acadêmicas têm a oportunidade de apresentar seus
                                    projetos de forma profissional, com descrições completas, imagens,
                                    vídeos e todas as informações necessárias para chamar a atenção de
                                    empresas e investidores. Essa é a vitrine onde o talento e a
                                    criatividade se tornam visíveis.
                                </Typography>
                            </Stack>
                        </Stack>
                    </InfoCard>

                    <InfoCard
                        variante={"Transparent"}
                        cor={"branca"}
                        sx={{ flex: 1, textAlign: "center" }}
                    >
                        <Stack
                            gap={2}
                            color="#FFFCF5"
                        >
                            <Stack
                                gap={2}
                                sx={{ alignItems: { xs: "center", md: "unset" } }}
                            >
                                <Stack className="indice">
                                    <BriefcaseBusiness size={35} />
                                </Stack>
                                <Typography
                                    variant="h4"
                                    fontWeight={600}
                                >
                                    Empresas descobrem projetos
                                </Typography>
                            </Stack>

                            <Stack>
                                <Typography
                                    variant="h5"
                                    fontWeight={100}
                                >
                                    Empresas, instituições e potenciais patrocinadores podem navegar por
                                    projetos filtrando por áreas de interesse, temas de inovação ou
                                    demandas do mercado. É uma maneira eficaz de encontrar soluções
                                    criativas e se conectar com jovens talentos ainda em formação.
                                </Typography>
                            </Stack>
                        </Stack>
                    </InfoCard>

                    <InfoCard
                        variante={"Transparent"}
                        cor={"branca"}
                        sx={{ flex: 1, textAlign: "center" }}
                    >
                        <Stack
                            gap={2}
                            color="#FFFCF5"
                        >
                            <Stack
                                gap={2}
                                sx={{ alignItems: { xs: "center", md: "unset" } }}
                            >
                                <Stack className="indice">
                                    <Handshake size={35} />
                                </Stack>
                                <Typography
                                    variant="h4"
                                    fontWeight={600}
                                >
                                    Conexões facilitadas
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography
                                    variant="h5"
                                    fontWeight={100}
                                >
                                    Por meio de uma interface simples e intuitiva, o Nexus permite que
                                    alunos e empresas conversem diretamente. A plataforma oferece
                                    recursos para envio de mensagens, agendamento de encontros e até
                                    propostas de apoio ou contratação. A colaboração começa com um
                                    clique.
                                </Typography>
                            </Stack>
                        </Stack>
                    </InfoCard>

                    <InfoCard
                        variante={"Transparent"}
                        cor={"branca"}
                        sx={{ flex: 1, textAlign: "center" }}
                    >
                        <Stack
                            gap={2}
                            color="#FFFCF5"
                        >
                            <Stack
                                gap={2}
                                sx={{ alignItems: { xs: "center", md: "unset" } }}
                            >
                                <Stack className="indice">
                                    <HandHelping size={35} />
                                </Stack>
                                <Typography
                                    variant="h4"
                                    fontWeight={600}
                                >
                                    Receba apoio e oportunidades
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography
                                    variant="h5"
                                    fontWeight={100}
                                >
                                    Projetos promissores podem atrair diferentes formas de apoio:
                                    financeiro, estrutural, técnico ou até visibilidade em eventos e
                                    redes corporativas. A plataforma é um elo entre quem tem boas ideias
                                    e quem pode ajudar a realizá-las.
                                </Typography>
                            </Stack>
                        </Stack>
                    </InfoCard>
                </Stack>
            </Styled.Session>

            <Styled.Session
                gap={10}
                id="equipe"
            >
                <Stack
                    textAlign={"center"}
                    gap={2}
                    color={"#05334A"}
                    component={motion.section}
                    initial={MotionAnimation.fadeInVariant.hidden}
                    whileInView={MotionAnimation.fadeInVariant.visible}
                    viewport={MotionAnimation.defaultViewport}
                >
                    <Typography
                        variant="h3"
                        fontWeight={600}
                    >
                        Equipe de Desenvolvedores
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    alignItems="center"
                    gap={{ xs: 0, sm: 2 }}
                    component={motion.section}
                    initial={MotionAnimation.slideInVariant.hidden}
                    whileInView={MotionAnimation.slideInVariant.visible}
                    viewport={MotionAnimation.defaultViewport}
                >
                    <Button
                        tamanho={"md"}
                        somenteIcone
                        variante="ButtonOutlinedBlue"
                        icon={ChevronLeft}
                        onClick={() => {
                            const container = document.getElementById("dev-cards-container")
                            container?.scrollBy({ left: -300, behavior: "smooth" })
                        }}
                        sx={{ borderRadius: 10 }}
                    />

                    <Styled.DevCardsContainer id="dev-cards-container">
                        {[
                            { nome: "Camila Trentino", funcao: "Documentadora" },
                            { nome: "Giulia Pontelli", funcao: "Documentadora" },
                            { nome: "Enzo Caetano", funcao: "Desenvolvedor Full Stack" },
                            { nome: "Aline Dantas", funcao: "UI/UX Designer" },
                            { nome: "Kevin Marques", funcao: "Documentador" },
                        ].map((dev, index) => (
                            <InfoCard
                                key={index}
                                variante={"White"}
                                cor={"azul"}
                                sx={{
                                    textAlign: "center",
                                    cursor: "pointer",
                                    width: 300,
                                    flexShrink: 0,
                                }}
                            >
                                <Stack
                                    gap={2}
                                    alignItems={"center"}
                                >
                                    <CircleUser size={100} />
                                    <Stack>
                                        <Typography
                                            variant="h5"
                                            fontWeight={600}
                                            color="#B83229"
                                        >
                                            {dev.nome}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color="#064B72B2"
                                        >
                                            {dev.funcao}
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        direction={"row"}
                                        gap={2}
                                    >
                                        <Button
                                            tamanho={"lg"}
                                            icon={Linkedin}
                                            somenteIcone
                                            variante="ButtonLink"
                                        />
                                        <Button
                                            tamanho={"lg"}
                                            icon={Github}
                                            somenteIcone
                                            variante="ButtonLink"
                                        />
                                        <Button
                                            tamanho={"lg"}
                                            icon={Instagram}
                                            somenteIcone
                                            variante="ButtonLink"
                                        />
                                    </Stack>
                                </Stack>
                            </InfoCard>
                        ))}
                    </Styled.DevCardsContainer>

                    <Button
                        tamanho={"md"}
                        somenteIcone
                        variante="ButtonOutlinedBlue"
                        icon={ChevronRight}
                        onClick={() => {
                            const container = document.getElementById("dev-cards-container")
                            container?.scrollBy({ left: 200, behavior: "smooth" })
                        }}
                        sx={{ borderRadius: 10 }}
                    />
                </Stack>
            </Styled.Session>

            <Styled.Footer
                initial={MotionAnimation.fadeDownVariant.hidden}
                whileInView={MotionAnimation.fadeDownVariant.visible}
                viewport={MotionAnimation.defaultViewport}
            >
                <Stack
                    sx={{
                        justifyContent: "space-between",
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        alignItems: {
                            xs: "center",
                            md: "unset",
                        },
                        textAlign: {
                            xs: "center",
                            md: "unset",
                        },
                        gap: {
                            xs: 4,
                            md: 2,
                        },
                    }}
                >
                    <Stack gap={2}>
                        <Typography
                            variant="h3"
                            color="#FFFCF5"
                        >
                            Nexus
                        </Typography>
                        <Typography
                            variant="h6"
                            width={350}
                        >
                            Conectando projetos escolares inovadores com empresas que buscam investir no
                            próximo grande sucesso.
                        </Typography>
                    </Stack>

                    <Stack
                        justifyContent={"space-between"}
                        gap={2}
                    >
                        <Typography
                            variant="h5"
                            color="#FFFCF5"
                        >
                            Links rápidos
                        </Typography>
                        <Typography variant="h6">Inicio</Typography>
                        <Typography variant="h6">Plataforma Nexus</Typography>
                        <Typography variant="h6">Como Funciona</Typography>
                        <Typography variant="h6">Contato</Typography>
                    </Stack>

                    <Stack
                        justifyContent={"space-between"}
                        gap={2}
                    >
                        <Typography
                            variant="h5"
                            color="#FFFCF5"
                        >
                            Recursos
                        </Typography>
                        <Typography variant="h6">Equipe</Typography>
                        <Typography variant="h6">Termos de Serviço</Typography>
                        <Typography variant="h6">Apoiar</Typography>
                        <Typography variant="h6">Política de Privacidade</Typography>
                    </Stack>

                    <Stack gap={2}>
                        <Typography
                            variant="h5"
                            color="#FFFCF5"
                        >
                            Inscrever-se
                        </Typography>
                        <Typography
                            variant="h6"
                            width={300}
                        >
                            Fique atualizado com os últimos projetos e oportunidades.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack gap={5}>
                    <Divider sx={{ bgcolor: "#6B9EBD", height: 1.5, mt: 2 }} />

                    <Stack
                        sx={{
                            justifyContent: "space-between",
                            flexDirection: {
                                xs: "column",
                                sm: "row",
                            },
                            alignItems: {
                                xs: "center",
                                sm: "unset",
                            },
                            gap: 2,
                        }}
                    >
                        <Typography variant="h6">© 2025 Nexus. All rights reserved.</Typography>

                        <Stack
                            sx={{
                                flexDirection: {
                                    xs: "column",
                                    sm: "row",
                                },
                                gap: 3,
                            }}
                        >
                            <Button
                                tamanho={"md"}
                                variante="ButtonLinkLight"
                            >
                                Termos
                            </Button>
                            <Button
                                tamanho={"md"}
                                variante="ButtonLinkLight"
                            >
                                Privacidade
                            </Button>
                            <Button
                                tamanho={"md"}
                                variante="ButtonLinkLight"
                            >
                                Contato
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Styled.Footer>
        </Styled.Container>
    )
}
