import styles from "./Pag3.module.css"
function Pag3(){
    return(
        <div className={styles.div}>
                <h1 className={styles.h1Pag3}>
                    Avaliação dos nossos clientes
                </h1>

            <div style={{display: "flex"}}>
                <p className={styles.card}>
                    Minha experiência na clínica de fisioterapia e recuperação foi incrível. Desde o momento em que entrei pela porta, fui recebido por uma equipe calorosa e amigável. Os profissionais da clínica foram extremamente atenciosos e dedicados em entender as minhas necessidades e objetivos de recuperação.

                    A clínica conta com equipamentos de última geração e instalações modernas, o que contribuiu para um ambiente agradável e confortável durante as sessões de fisioterapia. Os profissionais eram altamente qualificados e demonstraram um profundo conhecimento em suas áreas de atuação.
                </p>

                <p className={styles.card}>
                    Minha experiência na clínica de fisioterapia e recuperação superou todas as minhas expectativas. Desde o primeiro contato, fui recebido com um sorriso caloroso e uma equipe atenciosa. A clínica possuía um ambiente acolhedor e relaxante, o que contribuiu para uma experiência agradável durante as sessões de fisioterapia.

                    Os profissionais da clínica demonstraram um alto nível de conhecimento e experiência em fisioterapia. Eles realizaram uma avaliação detalhada do meu quadro e desenvolveram um plano de tratamento personalizado para atender às minhas necessidades específicas.
                </p>


                <p className={styles.card}>
                    Minha experiência na clínica de fisioterapia e recuperação foi simplesmente excepcional. Desde o primeiro contato, a equipe da clínica demonstrou profissionalismo, empatia e dedicação em fornecer o melhor cuidado possível. Fiquei impressionado com o alto nível de conhecimento e habilidade dos fisioterapeutas que me atenderam.

                    A clínica oferecia uma ampla variedade de serviços e tratamentos especializados, o que me permitiu receber um cuidado completo e abrangente. Desde terapias manuais até exercícios terapêuticos e modalidades de eletroterapia, cada sessão foi cuidadosamente planejada para atender às minhas necessidades específicas.
                </p>
            </div>
        </div>
    )
}
export default Pag3;