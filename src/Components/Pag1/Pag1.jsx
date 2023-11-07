import styles from "./Pag1.module.css"
function Pag1(){
    return(

        <div className={styles.div}>
           <div>
               <h1> Proporcionando mais qualidade de vida através do movimento.</h1>
               <h2>Um espaço dedicado a atender
                   homens e mulheres de todas as idades.</h2>
               <a href={"#form"}>
                   <button>Agendar consulta</button>

               </a>
           </div>
            <img src="/image 1.png" alt=""/>
        </div>

    );
}

export default Pag1