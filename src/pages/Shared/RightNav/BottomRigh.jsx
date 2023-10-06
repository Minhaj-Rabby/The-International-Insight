import React from 'react'
import './RightNav.css';
import { Button } from 'react-bootstrap';
const BottomRigh = ({st}) => {
   
    if(st){
    return (
        <div className='bg-image mt-3'>
            <div className="w-ful text-center text-white p-5">
                <h3 >Create an Amazing Newspaper</h3>
                <p className='fs-6'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button className=' py-2 border-0 rounded-0' variant="danger" size="lg">Learn More</Button>
            </div>
        </div>
    )
}
else{
    return <></>
}
}



export default BottomRigh