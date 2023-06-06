import React, { useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import AOS from "aos";

const TodoList: React.FC<any> = ({ items,ondeleteTodo }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <ListGroup>
      {items.map((val: any) => {
        return (
          <ListGroup.Item
            data-aos="fade-up-right"
            key={val.id}
            className="d-flex justify-content-between"
          >
            {val.text}
            <Button variant="danger" onClick={ondeleteTodo.bind(null,val.id)}>X</Button>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default TodoList;
