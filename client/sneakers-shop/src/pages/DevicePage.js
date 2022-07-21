import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

const DevicePage = () => {
    const device = {id: 1, name: "Gboost 001", price: 700, rating: 5, img: "https://www.tradeinn.com/f/13842/138429797/adidas-ultraboost-22-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg"}
    const description = [
        {id: 1, title: "Dynamics", description: "Overpowered"},
        {id: 2, title: "Weight", description: "Nah"},
        {id: 3, title: "Positivity", description: "DAMN"},
        {id: 4, title: "Crazy?", description: "Burito!"},
    ]
    return (
        <Container className={"mt-4 justify-content-around"}>
            <Row>
                <Col md={6}>
                    <Image width={400} height={400} src={device.img}/>
                </Col>
                <Col md={2}></Col>
                <Col md={4}>
                    <Card className={"d-flex justify-content-between align-items-center"} style={{height: "100%"}}>
                    <Row>
                        <h2 className={"mb-3 text-center"}>{device.name}</h2>
                        <div className={"text-center mt-4"} style={{fontWeight: "500", fontSize: 24}}>
                            Rating: {device.rating}
                        </div>
                    </Row>
                        <h3 className={"mt-5"}>
                            {device.price}$
                        </h3>
                            <Button className={"mb-2"} variant={"outline-dark"}>
                                Add to Cart
                            </Button>
                    </Card>
                </Col>
            </Row>
            <Row className={"d-flex flex-column m-3"} style={{width: "100%", fontSize: 18}}>
                <h1>Parameters</h1>
                {description.map((info, index) =>
                    <Row key={info} style={{background: index%2 === 0 ? "lightgray" : "transparent", padding: 5}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;