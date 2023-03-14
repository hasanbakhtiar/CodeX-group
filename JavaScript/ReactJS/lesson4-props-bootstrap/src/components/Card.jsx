import React, { Component } from 'react'

class Card extends Component {
    render() {
        const {photo,title,newproduct,rate,price} = this.props.productprop;
        return (
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card" >
                    <img height={300} src={photo} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{price} $</p>
                        <button className={`btn btn-${newproduct ? "success":"danger"}`}>{newproduct ? "New" : "Old"}</button>
                        <div>{rate>0 && rate <3 ? "bad product" : rate>=3 && rate < 5  ? "good product" :rate >= 5 ? "excellent product" : "no rate" }</div>
                    </div>
                </div>
            </div>



        )
    }
}

export default Card