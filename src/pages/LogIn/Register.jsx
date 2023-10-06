import { useContext } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import { useState } from 'react'

const Register = () => {
  const { user, profileUpdate, createUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSucess] = useState('');
  const [accept, setAccept] = useState(false);


  const handleAccept = event => {
    setAccept(event.target.checked);
  }

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&?"]).{8,}$/.test(password)) {
      setSucess('');
      setError('Password Must Contain a Uppercase, a Lowercase , a Special character, a Digit   and 8 Character.');
      return;
    };

    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        // console.log(createdUser);
        setSucess('Account Created Successfully');
        profileUpdate(name, photo);
        console.log('after', createdUser);
        form.reset();
        setError('');
      })
      .catch(error => {
        setSucess('');
        setError(error.code);



      })
  }

  return (
    <Container className='mb-3' >
      <Row >
        <Col className='mx-auto' md={8} lg={4} xs={12}>
          <h4 className='text-center my-3'>Register your account</h4>
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className='fw-semibold'>Your Name</Form.Label>
              <Form.Control type="text" name='name' className='rounded-0' placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
              <Form.Label className='fw-semibold'>Photo URL</Form.Label>
              <Form.Control type="url" className='rounded-0' name='photo' placeholder="Enter your photo" required />
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
              <Form.Check
                onClick={handleAccept}
                type="checkbox"
                name='accept'
                label={<>Accetp <Link to="/terms">Terms and Conditions</Link></>}
              />
            </Form.Group>
            <Button className=' w-100 border-0 rounded-0' disabled={!accept} variant="secondary" type="submit">
              Register
            </Button>
            <div className="text-center fw-semibold my-3">
              Already Have an Account? <Link className='text-danger text-decoration-none' to='/login' >LogIn</Link>
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

export default Register