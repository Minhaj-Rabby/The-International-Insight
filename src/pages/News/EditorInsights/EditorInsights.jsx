import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

import first from '../../../assets/editorsInsight1.png';
import second from '../../../assets/editorsInsight2.png';
import third from '../../../assets/editorsInsight3.png';
import { FaCalendar } from 'react-icons/fa';

const EditorInsights = () => {
    return (
        <div className='mb-5'>
            <h4 className='my-4'>Editors Insight</h4>
            <Row xs={1} md={2} lg={3} className="g-4">


                <Col>
                    <Card>
                        <Card.Img className='p-2 pb-0' variant="top" src={first} />
                        <Card.Body>
                            <Card.Title className='text-start fw-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='fs-6 text-secendary'>
                                <FaCalendar></FaCalendar> Jan 4, 2022
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
                                <FaCalendar></FaCalendar> Jan 4, 2022
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
                                <FaCalendar></FaCalendar> Jan 4, 2022
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default EditorInsights