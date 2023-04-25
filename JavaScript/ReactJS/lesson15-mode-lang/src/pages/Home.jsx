import React, { useState } from "react";
import photoValue from "../data/photoValue";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

const Home = () => {
  const [photo, setPhoto] = useState(
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
  );

  
  
  const {t} = useTranslation();
  const [lang,setLang] = useState(localStorage.getItem('lang'));
  return (
    <div>
<h1>{lang === "az"? "Salam":"Hello"}</h1>
<Button onClick={()=>{localStorage.setItem('lang','az')
setLang('Salam')
}}>AZ</Button>

      <h1 className="text-center my-5">{t('title.0')}</h1>



      {/* <img 
        src={photo}
        width={200}
        alt=""
        onMouseEnter={() => {
          setPhoto(
            "https://cdn.pixabay.com/photo/2021/01/29/06/28/marguerite-5959944_960_720.jpg"
          );
        }}
        onMouseLeave={() => {
          setPhoto(
            "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          );
        }}
      /> */}

{photoValue.map((item,i)=>(
  <div key={i} className="main-ph">
    <img width={200} className="ph1" src={item.photo1} alt="" />
    <img width={200} className="ph2" src={item.photo2} alt="" />
  </div>

))}
    </div>
  );
};

export default Home;
