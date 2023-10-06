import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const Contact = () => {
    return (
        <Container className="mt-3 ">
            <Row>
                <Col className='mx-auto border border-dark p-3 mb-3' md={8} lg={8} xs={12}>
                    <h4 className='text-center'>Contact Me</h4>
                    <p>
                        If you have any questions, feedback, or inquiries, please feel free to contact us using the form below.
                    </p>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Your Email" />
                        </Form.Group>

                        <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                        </Form.Group>
                        <div className='text-center  my-3'>
                        <Button variant="primary" className='w-50'  type="submit">
                            Submit
                        </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact