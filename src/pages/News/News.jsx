import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom'
import EditorInsights from './EditorInsights/EditorInsights';

const News = () => {
    const news  = useLoaderData();
    const { category_id, title, details, image_url } = news;
    return (
        <div>
            <h4 className='mb-4'>The International Insight</h4>

            <Card>
            <img src={image_url} className='img-fluid m-3' alt="" />
               
                <Card.Body>
                <Card.Title className='text-start mt-2 fw-bold'>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button className='border-0 rounded-0' variant="danger"><FaArrowLeft className="me-2 align-center"></FaArrowLeft>All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorInsights></EditorInsights>
        </div>
    )
}

export default News