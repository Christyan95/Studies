import { tempoParaSegundos } from "../../../common/utils/time"
import style from "./Relogio.module.scss"

interface Props {
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {

    const x = tempo;
    const [a1, a2, a3, a4, a5, a6] = String(tempo).padStart(6, '0');

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;

    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

    return (
        <>
            {/* <span className={style.relogioNumero}>{a1}</span>
            <span className={style.relogioNumero}>{a2}</span>
            <span className={style.relogioNumero}>{a3}</span>
            <span className={style.relogioNumero}>{a4}</span>
            <span className={style.relogioNumero}>{a5}</span>
            <span className={style.relogioNumero}>{a6}</span> */}
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}