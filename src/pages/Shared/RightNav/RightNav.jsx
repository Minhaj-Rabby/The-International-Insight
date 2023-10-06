import React from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import './RightNav.css';
import { Link } from 'react-router-dom';
import BottomLeft from '../LeftNav/BottomLeft';
import BottomRigh from './BottomRigh';

const RightNav = ({st}) => {

  return (
    <div>
      <h4>Login With</h4>
      <Button className='my-3 w-100' variant="outline-primary" size="lg"><FaGoogle className='me-2 ' />Login With Google</Button>
      <Button className=' mb-3 w-100' variant="outline-secondary" size="lg"><FaGithub className='me-2 text-dark' />Login With Github</Button>
      <div>
        <h4 className='mt-3'>Find Us On</h4>

        <ListGroup className='my-3 fs-5 fw-normal'>
          <ListGroup.Item><Link to="https://www.facebook.com/" target="_blank" className='text-decoration-none'><FaFacebook className='me-3 fs-3 text-primary'></FaFacebook>Facebook</Link></ListGroup.Item>
          <ListGroup.Item><Link to="https://twitter.com/" target="_blank" className='text-decoration-none'><FaTwitter className='me-3 fs-3 text-primary'></FaTwitter>Twitter</Link></ListGroup.Item>
          <ListGroup.Item><Link to="https://www.instagram.com/" target="_blank" className='text-decoration-none'><FaInstagram className='me-3 fs-3 text-danger'></FaInstagram>Instagram</Link></ListGroup.Item>
        </ListGroup>
      </div>
      
      <QZone></QZone>
      <BottomRigh st={st}></BottomRigh>
      
    </div>
  )
}

export default RightNav