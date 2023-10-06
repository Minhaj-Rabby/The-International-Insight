import React from 'react'
import { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';
import { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LogIn = () => {
  const { user, signIn,signInGithub, signInGoogle, } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSucess] = useState('');
  const location = useLocation();
  const from = location.state?.from.pathname || '/category/0';

  const navigate = useNavigate();

  
  const handleGoogleLogin = () => {
    signInGoogle()
      .then(result => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error.message);
      })
  }
  const handleGithubLogin = () => {
    signInGithub()
      .then(result => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error.message);

      })
  }

  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        setSucess('Account LoggedIn Successfully');
        form.reset();
        setError('');
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.code);
        setSucess('');
      })
  }

  return (
    <Container className='mb-3' >
      <Row >
        <Col className='mx-auto' md={8} lg={5} xs={12}>
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

            <div className='d-flex my-3 justify-content-center align-items-center'>
              <Button onClick={handleGoogleLogin} className='text-dark me-3' variant="outline-secondary" ><FaGoogle className='me-2 ' />Login With Google</Button>
              <Button onClick={handleGithubLogin} className='text-dark ' variant="outline-secondary"><FaGithub className='me-2 text-dark' />Login With Github</Button>
            </div>


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