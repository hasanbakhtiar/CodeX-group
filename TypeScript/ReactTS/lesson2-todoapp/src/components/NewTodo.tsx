import React, { useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
type NewTodoProp={
  onAddTodo:(todo:string)=>void
}


const NewTodo: React.FC<NewTodoProp> = ({onAddTodo}) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitedHandler =(e:React.FormEvent):void=>{
          e.preventDefault();
          const enterValue = textInputRef.current!.value;
          if (!enterValue) {
            alert('please, fill input.')
          }else{
            onAddTodo(enterValue);
            textInputRef.current!.value = "";
          }
          
  }
  return (
    <Form onSubmit={todoSubmitedHandler}>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Enter new task" ref={textInputRef}/>
        <Button variant="success" id="button-addon2" type="submit">
          Add
        </Button>
      </InputGroup>
    </Form>
  );
};

export default NewTodo;
