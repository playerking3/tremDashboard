import Grafico from "./Grafico";
import css from './CorrenteCard.module.css'
function CorrenteCard(){
    return(
        <div className={css.container}>
            <div className={css.conteudoGrid}>
                <h3>Corrente</h3>
                <Grafico/>
            </div>
            <div className={css.info}>
                <p>Valor em tempo real</p>
                <p className={css.numeroGrande}>50W</p>
                <p>3V - 16A</p>
            </div>
        </div>
    )
}

export default CorrenteCard