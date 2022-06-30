import React from "react";
import { useState } from "react";
import { Button, Form } from 'react-bootstrap';

function FormAddTodo({ addTodo}) {
    const [value, setValue] = useState("");
    /*if(getTodo){
        console.log('getTodo');
        var getTodoName = gettodos.name;
        var getTodoNum = gettodos.number;
        setValue(getTodo);
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
            <label className="col-md-12 mb-3"><b>Add Race Schedule</b></label>
            <div className="d-inline-flex col-md-12">
                <Form.Group className="col-md-10">
                    <Form.Control type="text" className="input col-md-12" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new race day" />
                </Form.Group>
                <Button variant="primary mb-3 col-md-1 ms-2" type="submit">Submit</Button>
            </div>
        </Form>
    );
}

export default FormAddTodo;