import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (<Container className={"d-flex justify-content-center align-items-center"}
                       style={{height: window.innerHeight - 50}}>
        <Card style={{width: "50%"}} className={"p-4"}>
            <h4 className={"m-auto"}>{isLogin ? "Authorization" : "Registration"}</h4>
            <Form className={"d-flex flex-column"}>
                <Form.Control className={"mt-4"} placeholder={"Enter E-mail"}/>
                <Form.Control className={"mt-3"} placeholder={"Enter password"}/>
                <Row className={"d-flex justify-content-between align-items-center mt-3 pe-3 ps-1 row-cols-auto"}>
                    {isLogin ? <div className={"d-flex"}>
                        New customer? <NavLink
                        style={{marginLeft: 8, textDecoration: "underline", fontWeight: "500"}}
                        to={REGISTRATION_ROUTE}>Sign up</NavLink>
                    </div> : <div className={"d-flex"}>
                        Have account? <NavLink
                        style={{marginLeft: 8, textDecoration: "underline", fontWeight: "500"}}
                        to={LOGIN_ROUTE}>Sign in</NavLink>
                    </div>}
                    <Button>{ isLogin ? "Login" : "Registration"}</Button>
                </Row>
            </Form>
        </Card>
    </Container>);
};

export default Auth;