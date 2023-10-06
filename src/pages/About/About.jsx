import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


const About = () => {
    return (
        <Container className="my-3">
            <Row>
                <Col className='mx-auto border border-dark p-3 mb-3' md={8} lg={8} xs={12}>
                    <h4 className='text-center'>About Our Website</h4>
                    <p>
                        Welcome to The International Insight! Here, you can learn more about our goals and missions.
                    </p>
                    <div>
                        <div><h5>Global News Coverage: </h5>Provide comprehensive and unbiased coverage of international news and events, ensuring that readers stay informed about global developments.</div>

                        <div> <h5>Promote Cross-Cultural Understanding:</h5> Foster a deeper understanding and appreciation of different cultures, traditions, and perspectives from around the world.</div>

                        <div> <h5>Feature Diverse Voices: </h5>Highlight stories and viewpoints from individuals and communities worldwide, promoting inclusivity and diversity in storytelling.</div>

                        <div><h5>Educational Resources:</h5>  Offer educational articles, resources, and insights to help readers learn about global issues, geography, and intercultural communication.</div>

                        <div><h5>Cultural Exchange:</h5>Facilitate cultural exchange by sharing stories, recipes, traditions, and experiences from various countries and regions.</div>

                        <div><h5>Connect Global Communities:</h5>Create a platform where people from different parts of the world can connect, share experiences, and engage in meaningful discussions.</div>

                        <div><h5>Advocate for Global Issues:</h5> Raise awareness about critical global issues such as climate change, poverty, human rights, and healthcare, and encourage readers to take action.</div>

                        <div><h5>Collaborate with Experts:</h5> Collaborate with international experts, researchers, and organizations to provide in-depth analysis and insights on pressing global challenges.</div>

                        <div><h5>Engage with Readers:</h5> Encourage reader participation through comments, discussions, and user-generated content to build a global community of engaged individuals.</div>

                        <div> <h5>Promote Peace and Understanding:</h5> Contribute to the promotion of peace, tolerance, and understanding among nations and cultures.</div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default About