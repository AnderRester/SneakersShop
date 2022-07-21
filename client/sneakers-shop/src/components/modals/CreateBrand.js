import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateBrand = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide = {onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new Type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={"Enter a name of the type"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-warning"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;