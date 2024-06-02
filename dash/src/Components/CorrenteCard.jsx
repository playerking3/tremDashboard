import Grafico from "./Grafico";
import css from './CorrenteCard.module.css'
function CorrenteCard(){
    return(
        <div className={css.container}>
            <h3>Corrente</h3>
            <div className={css.conteudoGrid}>
                <Grafico/>
                <div>
                    <p>Valor em tempo real</p>
                    <p>50W</p>
                    <p>3V - 16A</p>
                </div>
            </div>
        </div>
    )
}
export default CorrenteCard