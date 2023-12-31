import moment from 'moment';
import React from 'react'
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;
    return (
        <Card className="text-start mb-4">
            <Card.Header className='d-flex  pb-0 align-items-center'>

                <Image style={{ height: '40px' }} src={author?.img} className='mb-3' roundedCircle />
                <div className='ps-3 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>

                    <p><small>{moment(author?.published_date).format("YYYY-MM-D")}</small></p>
                </div>
                <FaBookmark></FaBookmark><FaShareAlt className='ms-2'></FaShareAlt>
                <div>

                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title className='text-start mt-2 fw-bold'>{title}</Card.Title>
                <img src={image_url} className='img-fluid my-3' alt="" />
                <Card.Text className='my-3'>
                    {
                        details.lenght < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<br></br><Link className='text-warning' to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer style={{ height: '60px' }} className="fs-6 text-muted d-flex align-items-center ">
                <div className='flex-grow-1 d-flex'>
                <Rating style={{ maxWidth: 100 }} value={rating?.number} readOnly />
                    <span className='ms-2'>{rating.number}</span>
                   
                </div>
                <div>
                    <FaEye className="me-2"></FaEye> <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    )
}

export default NewsCard