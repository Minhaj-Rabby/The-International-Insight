import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LeftNav.css'

const LeftNav = () => {

  const [catagories,setCatagories]=useState([]);

  useState(()=>{

    fetch('http://localhost:5000/catagories')
    .then(res=>res.json())
    .then(data=>setCatagories(data))
    .catch(err=>{
      console.error(err);
    })
  },[]);

  // console.log(catagories)
  return (
    <div>
      <h3>All Catagories</h3>
     <div className='my-3'>
     {
        catagories.map((catagory)=>
            <Button className="w-100 fs-4 p-3 border-0 text-start btn-clr" key={catagory.id}>
              <Link to={`/catagory/${catagory.name}`} className=' ms-5 text-dark text-decoration-none '
              >{catagory.name}</Link>
              </Button>
          
        )
      }
     </div>
    </div>
  )
}

export default LeftNav