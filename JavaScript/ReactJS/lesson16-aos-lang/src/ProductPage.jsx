import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "./context/ProductContext";
import axios from "axios";

const ProductPage = () => {
  const [data] = useContext(ProductContext);
  const [lang, setLang] = useState(localStorage.getItem('lang'));

  const [dataaz, setDataAz] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5500/src/data/productaz.json")
      .then((res) => setDataAz(res.data));
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setLang("en");
            localStorage.setItem('lang','en')
          }}
        >
          en
        </button>
        <button
          onClick={() => {
            setLang("az");
            localStorage.setItem('lang','az')

          }}
        >
          az
        </button>
      </div>
      <ol>
        {lang === "en"
          ? data.map((item) => {
              return (
                <li key={item.id}>
                  <img width={50} src={item.img} alt="" />
                  {item.title}
                </li>
              );
            })
          : dataaz.map((item) => {
              return (
                <li key={item.id}>
                  <img width={50} src={item.img} alt="" />
                  {item.title}
                </li>
              );
            })}
      </ol>
    </>
  );
};

export default ProductPage;
