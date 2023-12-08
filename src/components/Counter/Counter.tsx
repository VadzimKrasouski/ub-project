import { useState } from "react";
import classes from './Counter.module.scss'

interface CounterProps {
    className?: string;
}

export const Counter = ({className}: CounterProps) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.header}>{count}</h1>
            <button className={classes.btn} onClick={increment}>+</button>
        </div>
    );
};

