import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();


export const ProductProvider = ({children})=>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:5500/src/data/producten.json')
        .then(res=>setData(res.data))
    },[])
    return <ProductContext.Provider value={[data,setData]}>{children}</ProductContext.Provider>
}