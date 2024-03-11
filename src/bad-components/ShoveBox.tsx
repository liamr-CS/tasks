import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    console.log("Before: " + position.toString() + "px");
    const box = MoveableBox();

    function ShoveBoxButton() {
        console.log(position.toString());
        return (
            <Button onClick={() => setPosition(position.valueOf() + 4)}>
                Shove the Box
            </Button>
        );
    }

    function MoveableBox(): JSX.Element {
        return (
            <div
                data-testid="moveable-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "lightblue",
                    border: "1px solid blue",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: position + "px"
                }}
            ></div>
        );
    }

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}px</span>
            <div>
                <ShoveBoxButton></ShoveBoxButton>
            </div>
            <div>{box}</div>
        </div>
    );
}
