import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import logo from "../assets/favicon.ico"
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    console.log(navigate)
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: "92%", cursor: "pointer"}} border={"light"}>
                <Image className={"align-self-center"} width={120} height={120} src={device.img}/>
                <div className={"align-items-center m-auto"}>
                    {device.name}
                </div>
                <div className={"text-black-50 mt-1 mb-2 d-flex justify-content-around align-items-center"}>
                    <div>
                        Adidas
                    </div>
                    <div className={"d-flex"}>
                        <div className={"d-flex align-items-center"}>
                            {device.rating}
                            <Image className={"ms-1"} width={18} height={18} src={logo}/>
                        </div>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
