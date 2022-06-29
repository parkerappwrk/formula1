import React from "react";
import styles from "./todo.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function TodoRace({ todo, index, markTodo, removeTodo,editTodo }) {
    return (
        <div className="todo" id="todo" index={index}>
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
            <div>
                <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
                <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>{' '}
                <Button variant="outline-warning" onClick={() => editTodo(index)}>✎</Button>
            </div>
        </div>
    );
}

function FormAddTodo({ addTodo}) {
    const [value, setValue] = React.useState("");

    /*if(gettodos){
        var getTodoName = gettodos.name;
        var getTodoNum = gettodos.number;
        setValue(getTodoName);
    }*/
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        /*if(gettodos){
            updateTodo(value,getTodoNum);
        }else{*/
            addTodo(value);
            setValue("");
        /*}*/
    };

    return (
        <Form onSubmit={handleSubmit} className="d-inline-flex col-md-12 flex-wrap">
            <label className="col-md-12 mb-3"><b>Add Todo</b></label>
            <div className="d-inline-flex col-md-12">
                <Form.Group className="col-md-10">
                    <Form.Control type="text" className="input col-md-12" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new race day" />
                </Form.Group>
                <Button variant="primary mb-3 col-md-1 ms-2" type="submit">Submit</Button>
            </div>
        </Form>
    );
}

function App() {
    const [todos, setTodos] = React.useState([
        {
            text: "sample Race Day",
            isDone: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    /*let updateTodo = (text,index) => {
        const newTodos = [...todos];
        newTodos[index] = text;
        setTodos(newTodos);
    };*/

    const markTodo = index => {
        const newTodos = [...todos];
        if(newTodos[index].isDone === true) {
            newTodos[index].isDone = false;
        } else {
            newTodos[index].isDone = true;
        }
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const editTodo = index => {
        const newTodos = [...todos];
        let gettodos = newTodos[index];
        const getTodo = {'name':gettodos,'number':index};
        return getTodo;
    };

    return (
        <div className="app">
            <div className="container">
                <h1 className="text-center mb-4">Todo List</h1>
                <FormAddTodo addTodo={addTodo} gettodos={editTodo}/>
                <div>
                    {todos.map((todo, index) => (
                        <Card>
                            <Card.Body>
                                <TodoRace
                                    key={index}
                                    index={index}
                                    todo={todo}
                                    markTodo={markTodo}
                                    removeTodo={removeTodo}
                                    editTodo={editTodo}
                                />
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;