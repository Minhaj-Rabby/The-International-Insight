import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Terms = () => {
    return (
        <Container>

            <h4>Terms and Conditions</h4>


            <h6>1. Introduction</h6>
            <p>Welcome to our website. These terms and conditions govern your use of our website.</p>

            <h6>2. Acceptance of Terms</h6>
            <p>By accessing or using our website, you agree to these terms and conditions.</p>

            {/* More sections for different clauses */}
        <p> <Link to="/register">Go back</Link></p>
            <p>&copy; 2023 The International Insight</p>
        </Container>
    )
}

export default Terms