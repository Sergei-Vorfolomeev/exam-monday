import {inspect} from "util";
import styles from '../App.module.css'

type UniversalButtonType = {
    name: string
    callBack: () => void
    isDisabled: boolean
}

export const UniversalButton = (props:UniversalButtonType) => {
    const callBackHandler = () => {
        props.callBack()
    }
    return(
        <button className={styles.button} onClick={callBackHandler} disabled={props.isDisabled}>{props.name}</button>
    )
}