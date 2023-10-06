import React from 'react'
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import userImg from '../../../assets/user.png';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);


    const photoURL = user?.photoURL ? user.photoURL : userImg;

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" variant='light '>
                <Container className='pe-0'>
                    <Navbar.Toggle className='' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className=" fw-bold ms-auto ">

                            <Link className='text-decoration-none text-dark me-3' to="/category/0">Home</Link>

                            <Link className='text-decoration-none text-dark me-3' to="/about">About</Link>

                            <Link className='text-decoration-none text-dark' to="/contact">Contact</Link>

                        </Nav>
                        <Nav className='ms-auto '>
                            {
                                user ?
                                    <>
                                        <Image src={photoURL} className="img-user me-2" alt="" roundedCircle/>

                                        <Link><Button onClick={handleLogOut} className='border-0 rounded-0' variant="dark">LogOut</Button></Link>
                                    </> :
                                    <Link to='/login'>
                                        <Button className='border-0 rounded-0' variant="dark">LogIn</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default NavigationBar