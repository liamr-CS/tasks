import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiChar, changeHoliChar] = useState<string>("🍀");

    function advanceByAlphabet(): void {
        const holiString = ["🎄", "🎃", "🍀", "🦃", "💖"];
        let index = holiString.indexOf(holiChar);
        if (index == 4) {
            index = 0;
            changeHoliChar(holiString[index]);
            //console.log(holiChar + index + holiString[0] + "End");
        } else {
            index = index + 1;
            changeHoliChar(holiString[index]);
            //console.log(holiChar + index + holiString[index] + "Middle");
        }
    }

    function advanceByYear(): void {
        const holiString = ["💖", "🍀", "🎃", "🦃", "🎄"];
        let index = holiString.indexOf(holiChar);
        if (index == 4) {
            index = 0;
            changeHoliChar(holiString[index]);
            //console.log(holiChar + index + holiString[0] + "End");
        } else {
            index = index + 1;
            changeHoliChar(holiString[index]);
            //console.log(holiChar + index + holiString[index] + "Middle");
        }
    }

    function updateChar(): string {
        return holiChar;
    }

    return (
        <div>
            <span>
                <Button onClick={() => advanceByAlphabet()}>
                    Advance by Alphabet
                </Button>
                <Button onClick={() => advanceByYear()}>Advance by Year</Button>
                <p>Holiday: {updateChar()}</p>
            </span>
        </div>
    );
}
