import {createContext,useState,useEffect} from 'react';
import axios from 'axios';

export const ProductContext = createContext();



export const ProductProvider = props => {
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        const fetchApi = async()=>{
            const comingData = await axios.get('https://fakestoreapi.com/products')
            setProduct(comingData.data);
        }
        fetchApi();
    },[])
    
    
  return (
    <ProductContext.Provider value={[product,setProduct]}>
        {props.children}
    </ProductContext.Provider>
  )
}

