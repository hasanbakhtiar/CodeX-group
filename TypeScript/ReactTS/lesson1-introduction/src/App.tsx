import React, { useState } from "react";
import List from "./components/List";
import data from "./data/data";
import photo from './img/unsplash.jpg';
interface stateType {
  name: string;
  surname: string;
}

const App: React.FC = () => {
  const [info, setInfo] = useState<stateType[]>([
    {
      name: "Jhone",
      surname: "Doe",
    },
  ]);

  return (
    <div>
        <img src={photo} alt="err" />
      {info.map((data: any) => {
        return <p>{data.name}</p>;
      })}
      <button
        onClick={() => {
          setInfo([
            {
              name: "Jhone",
              surname: "Doe",
            },
            {
                name: "hello",
                surname: "Mello",
            }
          ]);
        }}
      >
        add name
      </button>
      {data.map((item: any, count: number) => {
        return (
          <List
            key={count}
            id={item.id}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default App;
