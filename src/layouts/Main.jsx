import React from 'react'
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import Marquee from "react-fast-marquee";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <div className='d-flex p-2 my-2 fw-bold bg-color'>
          <Button className='fw-normal border-0 rounded-0' variant='danger'>Latest</Button>
          <Marquee className='fw-bold' speed={50}>
         " Shaquille O’Neal auctions a 1000 size 22 Reeboks for $999.32 each!","America Imported Over $6 Billion in Goods From Russia Since Ukraine Invasion","Tucker Carlson: Putin Winning in Ukraine, Biden Hurting West","Joe Biden announces $3 billion in Ukraine weapons aid",
          </Marquee>
        </div>
      </Container>
      <NavigationBar></NavigationBar>
      <Container>
        <Row className='mt-2'>
          <Col lg={3}>
            <LeftNav>

            </LeftNav>
          </Col>

          <Col lg={6}>
            <Outlet></Outlet>
          </Col>

          <Col lg={3}>
            <RightNav>

            </RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Main;