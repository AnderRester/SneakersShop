import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide = {onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add a new Device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={"mt-2 mb-2"}>
                        <Dropdown.Toggle>Choose the Type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={"mt-2 mb-2"}>
                        <Dropdown.Toggle>Choose the Brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                            <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className={"mt-3"}  placeholder={"Enter device name"}/>
                    <Form.Control className={"mt-3"}  placeholder={"Enter device price"} type={"number"}/>
                    <Form.Control className={"mt-3"}  placeholder={"Choose device image"} type={"file"}/>
                    <hr/>
                    <Button variant={"outline-dark"} onClick={addInfo}>Add a new parameter</Button>
                    {info.map(i =>
                    <Row className={"mt-4"} key={i.number}>
                        <Col md={4}>
                            <Form.Control placeholder={"Enter parameter's name"}/>
                        </Col>
                        <Col md={4}>
                            <Form.Control placeholder={"Enter parameter"}/>
                        </Col>
                        <Col md={4}>
                            <Button variant={"outline-danger"} onClick={() => removeInfo(i.number)}>Remove</Button>
                        </Col>
                    </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;