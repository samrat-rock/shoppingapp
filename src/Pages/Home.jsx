import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductBycat from '../Components/ProductBycat';

function Home() {
  let [cat, setCat]=useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then((a)=>setCat(a));
  },[])
  return (
    <>
      <section className=''>
        <div className="container">
          <div className="row">
            <div className="col-lg-3  p-2 catlist">
              <div className="shadow">
            <ul className="list-group">
          {cat.map((a)=>(<li className="list-group-item" key={a.slug}>
          <Link to={`/cat/${a.slug}`} className='link-dark text-decoration-none'> {a.name}</Link>
           
            </li>
        ))}
  
  
</ul>

              </div>
            </div>
            <div className="col-lg-9">
              <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a73b2da870e.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='py-3 border'>
        <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-between">
                
                <h3>Brands</h3>
                <button>See All</button>
                
              </div>
              
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex gap-2">
                <div className="col-lg-1">
                  <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11115d3497.png" alt="" />
                </div>
                <div className="col-lg-1">
                  <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a1112631afd.png" alt="" />
                </div>
                <div className="col-lg-1">
                  <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a110c691c61.png" alt="" />
                </div>
                <div className="col-lg-1">
                  <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a110b53d44c.png" alt="" />
                </div>
                <div className="col-lg-1">
                  <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a1148d0b519.png" alt="" />
                </div>
                <div className="col-lg-1">
                  <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a1105c0a8c4.png" alt="" />
                </div>
                <div className="col-lg-1">
                  <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11021744fd.png" alt="" />
                </div>
                <div className="col-lg-1">
                  <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a1100dce05b.png" alt="" />
                </div>
                <div className="col-lg-1">
                  <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a10fc51dae8.png" alt="" />
                </div>

                <div className="col-lg-1">
                  <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a10fa4db499.png" alt="" />
                </div>
                <div className="col-lg-1">
                  <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a10d9b12f9a.png" alt="" />
                </div>
                
              </div>
            </div>
        </div>

      </section>

    <ProductBycat tt="beauty"/>
    <ProductBycat tt="fragrances"/>
    <ProductBycat tt="laptops"/>
    <ProductBycat tt="furniture"/>
   
    </>
  )
}

export default Home
