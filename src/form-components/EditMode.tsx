import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    label="Edit Mode"
                    name="edit"
                    checked={inEditMode}
                    onChange={updateEditMode}
                />
            </div>
            {inEditMode ? (
                <div>
                    <Form.Group>
                        <Form.Control
                            title="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={updateName}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Student</Form.Label>
                        <Form.Check
                            title="student"
                            type="checkbox"
                            name="student"
                            label="student"
                            inline
                            checked={isStudent}
                            onChange={updateStudent}
                        />
                    </Form.Group>
                </div>
            ) : (
                <div>
                    {name} {isStudent ? " is a student" : " is not a student"}
                </div>
            )}
        </div>
    );
}
