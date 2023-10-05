import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <Container >
      <Row >
        <Col className='mx-auto' md={8} lg={4} xs={12}>
          <h4 className='text-center my-3'>Register your account</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className='fw-semibold'>Your Name</Form.Label>
              <Form.Control type="text" name='name' className='rounded-0' placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
              <Form.Label className='fw-semibold'>Photo URL</Form.Label>
              <Form.Control type="text" className='rounded-0' name='photo' placeholder="Enter your photo" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='fw-semibold'>Email address</Form.Label>
              <Form.Control type="email" name='email' className='rounded-0' placeholder="Enter your Email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='fw-semibold'>Password</Form.Label>
              <Form.Control type="password" name="password" className='rounded-0' placeholder="Enter your password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" name='accept' label="Accept Term & Conditions" />
            </Form.Group>
            <Button className=' w-100 border-0 rounded-0' variant="secondary" type="submit">
              Register
            </Button>
            <div className="text-center fw-semibold my-3">
              Already Have an Account? <Link className='text-danger text-decoration-none' to='/login' >LogIn</Link>
            </div>
            <Form.Text className="text-success">

            </Form.Text>
            <Form.Text className="text-danger">

            </Form.Text>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Register