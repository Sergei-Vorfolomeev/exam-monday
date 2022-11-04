import styles from "../App.module.css";
import React, {useState} from "react";

type ScoreboardType = {
    score: number
    maxValue: number
}

export const Scoreboard = (props:ScoreboardType) => {
    return (
        <div className={props.score<props.maxValue ? styles.scoreboard : styles.scoreLimit}>{props.score}</div>
    )
}