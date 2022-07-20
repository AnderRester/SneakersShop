import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Form, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <NavLink style={{color: "white"}} to={SHOP_ROUTE}>ESG</NavLink>
                <Navbar.Collapse className="ml-auto">
                    {user.isAuth ? <Nav
                        className="ms-auto"
                        style={{maxHeight: '150px', color: "white"}}
                    >
                        <Button variant={"outline-light"}>Admin Pannel</Button>
                        <Button variant={"outline-light"} className="ms-3" onClick={() => user.setIsAuth(false)}>Log
                            out</Button>
                    </Nav> : <Nav
                        className="ms-auto"
                        style={{maxHeight: '150px', color: "white"}}
                    >
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Sign in</Button>
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
