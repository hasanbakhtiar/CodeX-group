import axios from "axios";
import { useEffect, useState } from "react"
import SingleProduct from "./components/SingleProduct";

const App = () => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState(data);
    const [searchData,setSearchData] = useState("");
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setData(res.data));
    }, [])


    const filterCategory = (catItem) => {
        const result = data.filter(item => (
            item.category === catItem
        ));
        setFilterData(result);

    }




    return (
        <div className="container mt-5">
            <div className="input-group mb-3">
                <input type="text" className="form-control"  placeholder="Search product" onChange={e=>setSearchData(e.target.value)}  />
                <button className="btn btn-outline-dark" type="button" id="button-addon2">Search</button>
            </div>




            <div className="row">
                <div className="col-12 col-sm-12 col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item" onClick={() => { filterCategory("men's clothing") }}>mens clothing</li>
                        <li className="list-group-item" onClick={() => { filterCategory("women's clothing") }}>womens clothing</li>
                        <li className="list-group-item" onClick={() => { filterCategory("jewelery") }}>jewelery</li>
                        <li className="list-group-item" onClick={() => { filterCategory("electronics") }}>electronics</li>
                    </ul>

                </div>
                <div className="col-12 col-sm-12 col-md-9">
                    <div className="row">
                        {filterData.length === 0 ? data.filter(s=>s.title.toLocaleLowerCase().includes(searchData)).map(item => (
                            <SingleProduct raiting={item.rating.rate} key={item.id} photo={item.image} title={item.title} price={item.price} />
                        )) : filterData.map(item => (
                            <SingleProduct key={item.id} photo={item.image} title={item.title} price={item.price} />
                        ))}
                    </div>
                </div>
            </div>




        </div>
    )
}

export default App