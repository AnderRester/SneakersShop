import React from 'react';
import {Button, Card, Container, Form, NavLink, Row} from "react-bootstrap";
import {REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    return (
        <Container className={"d-flex justify-content-center align-items-center"} style={{height: window.innerHeight - 50}}>
            AUTH
            <Card style={{width: "50%"}} className={"p-4"}>
                <h2 className={"m-auto"}>Authorization</h2>
                <Form className={"d-flex flex-column"}>
                    <Form.Control className={"mt-4"} placeholder={"Enter E-mail"}/>
                    <Form.Control className={"mt-3"} placeholder={"Enter password"}/>
                    <Row className={"d-flex justify-content-between align-items-center mt-3 pe-3 ps-1 row-cols-auto"}>
                        <div className={"d-flex"}>
                            New customer? <NavLink style={{marginLeft: 8, textDecoration: "underline", fontWeight: "500"}} to={REGISTRATION_ROUTE}>Sign up</NavLink>
                        </div>
                        <Button>Login</Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;