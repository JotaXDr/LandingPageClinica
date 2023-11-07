import styles from "./Pag4.module.css"
function Pag4(){
    return(
        <div className={styles.div}>
            <p className={styles.P}>
                Prevenir lesões e promover a saúde física
            </p>

           <div className={styles.DivIoga}>
               <h2 className={styles.h2Text}>
                   Exercício regular: Pratique atividades físicas adequadas ao seu nível de condicionamento.
                   Fortalecimento muscular: Realize exercícios para fortalecer os músculos principais.
                   Alongamento e flexibilidade: Faça alongamentos diários para manter a flexibilidade.
                   Alimentação saudável: Consuma uma dieta equilibrada e nutritiva.
                   Descanso adequado: Tenha uma boa qualidade de sono e permita que seu corpo descanse.
                   Postura correta: Mantenha uma postura adequada durante as atividades diárias.
                   Aquecimento e resfriamento: Faça um aquecimento antes e um resfriamento após o exercício.
                   Evite o excesso de treinamento: Equilibre a intensidade e a duração do treinamento.
               </h2>

               <img className={styles.img1} src="/IogaBola.jpg"/>
           </div>
        </div>
    )
}
export default Pag4