import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function increaseAttemptsLeft(): void {
        if (!isNaN(parseInt(requestedAttempts))) {
            setAttemptsLeft(attemptsLeft + parseInt(requestedAttempts));
        }
    }

    function decreaseAttemptsLeft(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Control
                type="number"
                value={requestedAttempts}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setRequestedAttempts(event.target.value)
                }
            />
            <Button onClick={increaseAttemptsLeft}>gain</Button>
            {attemptsLeft != 0 ? (
                <Button onClick={decreaseAttemptsLeft}>use</Button>
            ) : (
                <Button disabled onClick={decreaseAttemptsLeft}>
                    use
                </Button>
            )}
            <div>{attemptsLeft}</div>
        </div>
    );
}
