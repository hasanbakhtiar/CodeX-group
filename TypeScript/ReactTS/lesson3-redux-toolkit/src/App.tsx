import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./features/todoSlice";
import { useState } from "react";


const App:React.FC = () => {
  const [title,setTitle] = useState<string>("");
  const dispatch = useDispatch();
  const tododata:any = useSelector((state:any)=>state.todos);
  const formSubmit = (e:React.FormEvent)=>{
    e.preventDefault();

    
    dispatch(add(title));
    setTitle("");
  }
  
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="my-5 text-danger">Todo App </h1>
        <Col md={6}>
          <Form onSubmit={formSubmit}>
            <InputGroup className="mb-3">
              <Form.Control value={title} placeholder="Enter task" onChange={e=>{setTitle(e.target.value)}}/>
              <Button variant="success" id="button-addon2" type="submit">
                Add
              </Button>
            </InputGroup>
          </Form>

          <ListGroup>
            {tododata.map((item:any)=>{
              return  <ListGroup.Item key={item.id} className="d-flex align-items-center justify-content-between">
             {item.title} <Button variant="danger">X</Button>
            </ListGroup.Item>
            })}
           
          </ListGroup>
        </Col>
      </div>
    </Container>
  );
};

export default App;
