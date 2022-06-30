import React from "react";
import { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';

function EditTodo(props) {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([
        {
            text: "Sample Race Day",
            isDone: false,
            id: 0
        },
        {
            text: "Sample new Day",
            isDone: false,
            id: 1
        }
    ]);

    useEffect(() => {
        let index = props.id;
        const newTodos = [...todos];
        const gettodos = newTodos[index].text;
        setValue(gettodos);        
    },[props.id]);

    if(props.getTodo){
        var name = props.getTodo;
        setValue(name);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        props.updateTodo(value,props.id);
        setValue("");
    };

    return (
        <Form onSubmit={handleSubmit} className="d-inline-flex col-md-12 flex-wrap">
            <label className="col-md-12 mb-2"><b>Edit Race Schedule</b></label>
            <div className="d-inline-flex col-md-12">
                <Form.Group className="col-md-9">
                    <Form.Control type="text" className="input col-md-12" value={value} onChange={e => setValue(e.target.value)} placeholder="Edit race day" />
                </Form.Group>
                <Button variant="primary mb-3 col-md-1 ms-2" type="submit">Submit</Button>
                <Button variant="danger mb-3 col-md-1 ms-2" type="submit"onClick={() => props.canceltodo()}>Cancel</Button>
            </div>
        </Form>
    );
}

export default EditTodo;