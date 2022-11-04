import React, {useState} from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import {Scoreboard} from "./components/Scoreboard";
import {UniversalButton} from "./components/UniversalButton";

function App() {
    const startValue = 0
    const maxValue = 5
    const [score, setScore] = useState<number>(startValue)
    const increaseValue = () => {
        score < maxValue && setScore(score + 1)
    }

    const resetValue = () => {
        setScore(startValue)
    }

    return (
        <div className='App'>
            <div>
                <Scoreboard score={score} maxValue={maxValue}/>
                <div className={styles.buttonBox}>
                    <UniversalButton name={'inc'} callBack={increaseValue} isDisabled={score === maxValue}/>
                    <UniversalButton name={'res'} callBack={resetValue} isDisabled={score === startValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
