import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';
import { FaCalendar } from 'react-icons/fa';
import { useEffect } from 'react';
import { useState } from 'react';

const BottomLeft = () => {
    // const [name, setName] = useState('');
    // {
    //     id &&
    //     useEffect(() => {
    //         const url = `https://the-international-insight-server.vercel.app/category/${id}`;
    //         fetch(url)
    //             .then(response => response.text())
    //             .then(data =>
    //                 setName(data))
    //     }, [id]);
    // }

    return (
        <div className='my-5'>
            <Row xs={1} md={1} lg={1} className="g-4">

                <Col>
                    <Card>
                        <Card.Img className='p-2 pb-0' variant="top" src={first} />
                        <Card.Body>
                            <Card.Title className='text-start fw-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='fs-6 text-secendary'>
                               <FaCalendar className='ms-3'></FaCalendar> Jan 4, 2022
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className='p-2  pb-0 ' variant="top" src={second} />
                        <Card.Body>
                            <Card.Title className='text-start fw-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='fs-6 text-secendary'>
                                <FaCalendar className='ms-3'></FaCalendar> Jan 4, 2022
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className='p-2  pb-0' variant="top" src={third} />
                        <Card.Body>
                            <Card.Title className='text-start  fw-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='fs-6 text-secendary'>
                            <FaCalendar className='ms-3'></FaCalendar> Jan 4, 2022
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default BottomLeft