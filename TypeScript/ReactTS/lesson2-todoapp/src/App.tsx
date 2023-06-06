import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Col } from "react-bootstrap";
import { Todo } from "./todo.model";

const App: React.FC = () => {
        const [todos,setTodos] = useState<Todo[]>(
            [
                {
                    id:"1",
                    text:'test'
                },
                {
                    id:"2",
                    text:'test1'
                },
                {
                    id:"3",
                    text:'test3'
                }
            ]
        )

        const todoAddHandler=(todoText:string)=>{
              setTodos((prevTodo)=>[
                ...prevTodo,{id:crypto.randomUUID(),text:todoText}
              ])      
        }
    
  return (
    <div>
      <h1 className="text-center my-5">To Do App</h1>
      <div className="w-100 d-flex align-items-center flex-column">
        <Col md={5}>
          <NewTodo onAddTodo={todoAddHandler}/>
          <TodoList items={todos}/>
        </Col>
      </div>
    </div>
  );
};

export default App;
