import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Form, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <NavLink style={{color: "white"}} className={"mt-2"} to={SHOP_ROUTE}>ESG</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse className="ml-auto">
                    {user.isAuth ? <Nav
                        className="ms-auto"
                        style={{maxHeight: '150px', color: "white"}}
                    >
                        <Button variant={"outline-light"} className="ms-3 mt-2" onClick={() => navigate(ADMIN_ROUTE)}>Admin Pannel</Button>
                        <Button variant={"outline-light"} className="ms-3 mt-2" onClick={() => navigate(LOGIN_ROUTE)}>Log
                            out</Button>
                    </Nav> : <Nav
                        className="ms-auto"
                        style={{maxHeight: '150px', color: "white"}}
                    >
                        <Button variant={"outline-light"} className={"mt-2"} onClick={() => user.setIsAuth(true)}>Sign in</Button>
                    </Nav>}
                    {/*<Form className="d-flex">*/}
                    {/*    <Form.Control*/}
                    {/*        type="search"*/}
                    {/*        placeholder="Search"*/}
                    {/*        className="me-2"*/}
                    {/*        aria-label="Search"*/}
                    {/*    />*/}
                    {/*    <Button variant="outline-success">Search</Button>*/}
                    {/*</Form>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>);
})

export default NavBar;
