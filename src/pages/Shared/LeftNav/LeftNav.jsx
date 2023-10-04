import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './LeftNav.css'
import BottomLeft from './BottomLeft';

const LeftNav = () => {

  const{id}=useParams();
  const [categories,setCategories]=useState([]);

  // console.log(categories);

  useState(()=>{

    fetch('http://localhost:5000/categories')
    .then(res=>res.json())
    .then(data=>setCategories(data))
    .catch(err=>{
      console.error(err);
    })
  },[]); 

  return (

    <div>
      <h3>All Categories</h3>
     <div className='my-3'>
     {
        categories.map((category)=>
            <Button className="w-100 fs-4 p-3 border-0 text-start btn-clr" key={category.id}>
              <Link to={`/category/${category.id}`} className=' ms-5 text-dark text-decoration-none '
              >{category.name}</Link>
              </Button>
        )
      }
      <BottomLeft id={id}></BottomLeft>
      
     </div>
    </div>
  )
}

export default LeftNav