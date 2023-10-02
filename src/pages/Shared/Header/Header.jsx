import React from 'react'
import logo from '../../../assets/logo.png';
import userImg from '../../../assets/user.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Container>
            <div className="text-center mt-5">
                <img src={logo} className='img-fluid' alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>

            </div>
            <div className='d-flex p-3 pe-5 fw-bold bg-color'>
                <Button className='fw-normal' variant='danger'>Latest</Button>
                <Marquee className='fw-bold' speed={50}>
                    I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text. orrr sososos
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" variant='light '>
                <Container className='pe-0'>
                    <Navbar.Toggle  className='' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav className='ms-auto '>
                            <Nav.Link href="#deets"><img src={userImg} className="img-user"alt="" /></Nav.Link>
                            <Nav.Link className='pe-0' eventKey={2} href="#memes">
                            <Button className='' variant="dark">LogIn</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Header