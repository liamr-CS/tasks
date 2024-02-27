import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is my website</h1>
            <p>By Liam Roth</p>
            <img src="../assets/beagle.jpg" alt="A beagle on a hill" />
            <p>Cute Dogs</p>
            <ul>
                <li>Beagles</li>
                <li>Poodles</li>
                <li>Golden Retrievers</li>
            </ul>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        >
                            First
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "200px",
                                height: "200px",
                                backgroundColor: "red"
                            }}
                        >
                            Second
                        </div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
        </div>
    );
}

export default App;
