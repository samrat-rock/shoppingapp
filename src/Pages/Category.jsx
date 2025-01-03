import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


export default function Category() {
    let {cid}=useParams()
    let [data, setData]=useState([])
    useEffect(()=>{
      fetch(`https://dummyjson.com/products/category/${cid}`)
      .then(res => res.json())
      .then((a)=>setData(a.products));
    },[])
  return (
    <>
      <section>
        <div className="container py-5">
          <h2 className='text-uppercase fw-bold py-5 text-center'>{cid}</h2>
          <div className="row">
            {data.map((a)=>(
                  <div className="col-lg-3" key={a.id}>
                    <div className="shadow p-2 border">
                    <img className='w-100' src={a.thumbnail} alt="" />
                    <p>{a.title}</p>
                    </div>
                  </div>
            ))}
           
          </div>
        </div>
      </section>
    </>
  )
}
