import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
    <Container  >
      <Row >
        <Col className='mx-auto' md={8} lg={4} xs={12}>
      <h4 className='text-center my-3'>Login your account</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='fw-semibold'>Email address</Form.Label>
          <Form.Control type="email" className='rounded-0' name='email' placeholder="Enter your Email"  required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='fw-semibold'>Password</Form.Label>
          <Form.Control type="password"className='rounded-0' name="password" placeholder="Enter your password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox"  label="Check me out" />
        </Form.Group>
        <Button  className=' w-100 border-0 rounded-0' variant="secondary" type="submit">
          LogIn
        </Button>
        <div className="text-center fw-semibold my-3">
           Don't Have an Account? <Link className='text-danger text-decoration-none' to='/register' >Register</Link>
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

export default LogIn