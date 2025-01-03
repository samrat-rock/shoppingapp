import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';

function ProductBycat(props) {
    let [data, setData]=useState([])
    let {state,dispatch}=useContext(CartContext)
    useEffect(()=>{
      fetch(`https://dummyjson.com/products/category/${props.tt}`)
      .then(res => res.json())
      .then((a)=>setData(a.products));
    },[props.tt])
  return (
    <>
        <section>
        <div className="container py-5">
          <h2 className='text-uppercase fw-bold py-5 text-center'>{props.tt}</h2>
          <div className="row">
            {data.slice(0,4).map((a)=>(
                  <div className="col-lg-3" key={a.id}>
                    <div className="shadow p-2 border">
                    <img className='w-100' src={a.thumbnail} alt="" />
                    <p>{a.title}</p>
                    <button className='btn btn-primary btn-sm' onClick={()=>dispatch({type:'addtocart',payload:a})}> Add to cart</button>
                    </div>
                  </div>
            ))}
           
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductBycat
