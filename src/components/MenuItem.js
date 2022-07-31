import React from 'react'

const MenuItem = ({ dish }) => {
  return (
    <div className='card mb-3 text-center'>
     <div className="row g-0">
        <div className="col-md-4 card-image-div">
          <img src={dish.thumb} className="img-fluid" alt="..."/>
        </div>
        <div className="col-md-8 align" >
          <div className="card-body">
            <h3 className='card-title'>{dish.dish}</h3>
              <p className='card-text'>{dish.description}</p>
              {dish.sale ? (<div className='sale position-relative'><span>{dish.salePrice}</span>
                <span id='sale' class="position-absolute top-100 start-100 translate-middle p-2 bg-info border border-light rounded-circle">
                Sale
              </span></div>) :  <span>{dish.price}</span>}
          </div>
        </div>
     </div>
    </div>
  )
}

export default MenuItem