import React from "react";
import { Button } from 'react-bootstrap';

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

export default TodoRace;