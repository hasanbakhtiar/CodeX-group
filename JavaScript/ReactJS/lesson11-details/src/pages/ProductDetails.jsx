import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {url} = useParams();
    
    const [product,setProduct] = useState([]);
    
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setProduct(res.data))
    },[])

    const productdetails = product.find(p=>p.id.toString() === url);
  return (
    <>
    {productdetails === undefined ? <h1 className='mt-5 text-center'>Loading...</h1> : <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={productdetails.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productdetails.title}</h1>
            <p className="lead">{productdetails.description}</p>
            <p className="lead">{productdetails.price}$</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/"  className="btn btn-outline-secondary btn-lg px-4">Back</Link>
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Add to cart</button>
            </div>
          </div>
        </div>
      </div>}
    </>

  )
}

export default ProductDetails