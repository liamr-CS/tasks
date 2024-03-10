import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */

export function TwoDice(): JSX.Element {
    const [dice1Val, dice1] = useState<number>(1);
    const [dice2Val, dice2] = useState<number>(2);

    function d6(): number {
        return 1 + Math.floor(Math.random() * 6);
    }

    function rollDie1(): void {
        const num1 = d6();
        //console.log(num1 + " " + dice1Val);
        dice1(num1);
    }

    function rollDie2(): void {
        const num2 = d6();
        //console.log(num2 + " " + dice2Val);
        dice2(num2);
    }

    function getResult(): string {
        if (dice1Val == dice2Val) {
            if (dice1Val == 1) {
                return "Lose";
            }
            return "Win";
        } else {
            return "";
        }
    }
    return (
        <div>
            <span>
                <Button onClick={() => rollDie1()}>Roll Left</Button>
            </span>
            <span>
                <Button onClick={() => rollDie2()}>Roll Right</Button>
            </span>
            <span data-testid="left-die">{dice1Val}</span>
            <span data-testid="right-die">{dice2Val}</span>
            <span data-testid="result">{getResult()}</span>
        </div>
    );
}
