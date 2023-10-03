import React from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
import './RightNav.css';

const RightNav = () => {
  return (
    <div>
      <h3>Login With</h3>
      <Button className='my-3 w-100' variant="outline-primary" size="lg"><FaGoogle className='me-2 ' />Login With Google</Button>
      <Button className=' mb-3 w-100' variant="outline-secondary" size="lg"><FaGithub className='me-2 text-dark' />Login With Github</Button>
      <div>
        <h3 className='mt-3'>Find Us On</h3>
        <ListGroup className='my-3 fs-5 fw-normal'>
          <ListGroup.Item><FaFacebook className='me-3 fs-3 text-primary'></FaFacebook>Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter className='me-3 fs-3 text-primary'></FaTwitter>Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram className='me-3 fs-3 text-danger'></FaInstagram>Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className='bg-image mt-3'>
      <div className="w-ful text-center text-white p-5">
        <h1 >Create an Amazing Newspaper</h1>
        <p className='fs-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
       < Button className=' py-2 ' variant="danger" size="lg">Learn More</Button>
      </div>
      </div>
    </div>
  )
}

export default RightNav