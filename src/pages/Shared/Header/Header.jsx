import React from 'react'
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';

import './Header.css';
import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {
   
    return (
        <Container>
            <div className="text-center mt-3">
                <img src={logo} className='img-fluid' alt="" />
                <h5 className='text-secondary'>Journalism Without Fear or Favour</h5>
                <h5>{moment().format("dddd, MMMM D, YYYY")}</h5>

            </div>
           
        </Container>
    )
}

export default Header