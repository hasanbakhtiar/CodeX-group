
const SingleProduct = ({ title, price, photo, raiting }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card" >
                <img src={photo} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price}</p>
                    <div className="rating">
                        <span>
                            <i
                                style={{ "color": "orange" }}
                                className={
                                    raiting >= 1
                                        ? "fa-solid fa-star"
                                        : raiting >= 0.5
                                            ? "fa-solid fa-star-half-stroke"
                                            : "fa-regular fa-star"
                                }
                            ></i>
                        </span>
                        <span>
                            <i
                                style={{ "color": "orange" }}
                                className={
                                    raiting >= 2
                                        ? "fa-solid fa-star"
                                        : raiting >= 1.5
                                            ? "fa-solid fa-star-half-stroke"
                                            : "fa-regular fa-star"
                                }
                            ></i>
                        </span>
                        <span>
                            <i
                                style={{ "color": "orange" }}
                                className={
                                    raiting >= 3
                                        ? "fa-solid fa-star"
                                        : raiting >= 2.5
                                            ? "fa-solid fa-star-half-stroke"
                                            : "fa-regular fa-star"
                                }
                            ></i>
                        </span>
                        <span>
                            <i
                                style={{ "color": "orange" }}
                                className={
                                    raiting >= 4
                                        ? "fa-solid fa-star"
                                        : raiting >= 3.5
                                            ? "fa-solid fa-star-half-stroke"
                                            : "fa-regular fa-star"
                                }
                            ></i>
                        </span>
                        <span>
                            <i
                                style={{ "color": "orange" }}
                                className={
                                    raiting >= 5
                                        ? "fa-solid fa-star"
                                        : raiting >= 4.5
                                            ? "fa-solid fa-star-half-stroke"
                                            : "fa-regular fa-star"
                                }
                            ></i>
                        </span>
                    </div>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    )
}

SingleProduct.propTypes;
export default SingleProduct