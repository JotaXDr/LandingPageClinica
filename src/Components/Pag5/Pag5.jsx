import styles from "./Pag5.module.css"
function Pag5(){
    return(
        <div className={styles.Pag5} id={"form"}>
            <form className={styles.form}>
                <div className={styles.title}>Fele conosco</div>
                <input  type="text" placeholder="Seu Email" className={styles.input} />
                <textarea className={styles.textarea} placeholder="Sua mensagem"></textarea>

                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Pag5



