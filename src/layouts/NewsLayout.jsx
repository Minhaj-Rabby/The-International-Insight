import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';

const NewsLayout = () => {
  return (
    <div>
    <Header></Header>
    <Container>
      <Row className='mt-2'>
        <Col lg={9}>
          <Outlet></Outlet>
        </Col>

        <Col lg={3}>
          <RightNav  st={false}>

          </RightNav>
        </Col>
      </Row>
    </Container>
    <Footer></Footer>
  </div>
  )
}

export default NewsLayout