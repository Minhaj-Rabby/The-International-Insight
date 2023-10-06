import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './LeftNav.css'
import BottomLeft from './BottomLeft';

const LeftNav = () => {

  const [categories,setCategories]=useState([]);

  useState(()=>{

    fetch('https://the-international-insight-server.vercel.app/categories')
    .then(res=>res.json())
    .then(data=>setCategories(data))
    .catch(err=>{
      console.error(err);
    })
  },[]); 

  return (

    <div>
      <h4>All Categories</h4>
     <div className='my-3'>
     {
        categories.map((category)=>
            <Button className=" border-0 rounded-0 w-100 fs-6 p-3 border-0 text-start btn-clr" key={category.id}>
              <Link to={`/category/${category.id}`} className=' ms-5 text-dark text-decoration-none '
              >{category.name}</Link>
              </Button>
        )
      }
      <BottomLeft></BottomLeft>
      
     </div>
    </div>
  )
}

export default LeftNav