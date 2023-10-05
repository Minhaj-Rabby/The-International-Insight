import React from 'react'
import { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';
import { useState } from 'react';

const LogIn = () => {
  const { user, signIn } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSucess] = useState('');
  const location = useLocation();
  const from = location.state?.from.pathname || '/category/0';

  const navigate = useNavigate();

  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&?"]).{8,}$/.test(password)) {
    //   setError('Password Must Contain a Uppercase, a Lowercase , a Special character, a Digit   and 8 Character.');
    //   return;
    // };

    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSucess('Account LoggedIn Successfully');
        form.reset();
        setError('');
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.code);
        // console.log(error);
        setSucess('');
      })
  }

  return (
    <Container className='mb-3' >
      <Row >
        <Col className='mx-auto' md={8} lg={4} xs={12}>
          <h4 className='text-center my-3'>Login your account</h4>
          <Form onSubmit={handleLogIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='fw-semibold'>Email address</Form.Label>
              <Form.Control type="email" className='rounded-0' name='email' placeholder="Enter your Email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='fw-semibold'>Password</Form.Label>
              <Form.Control type="password" className='rounded-0' name="password" placeholder="Enter your password" required />
            </Form.Group>

            <Button className=' w-100 border-0 rounded-0' variant="secondary" type="submit">
              LogIn
            </Button>
            <div className="text-center fw-semibold my-3">
              Don't Have an Account? <Link className='text-danger text-decoration-none' to='/register' >Register</Link>
            </div>
            <Form.Text className="text-success">
              {
                success
              }
            </Form.Text>
            <Form.Text className="text-danger">
              {
                error
              }
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </Container>

  )
}

export default LogIn