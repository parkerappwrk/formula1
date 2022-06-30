import React from "react";
import { useState } from "react";
import "./todo.css";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormAddTodo from './FormAddTodo';
import TodoRace from './allTodoList';
import EditTodo from "./EditTodo";


function App() {
    const [isEditing, setIsEditing] = useState(false);
    const [id, setId] = useState("");
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

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    let updateTodo = (text,index) => {
        const newTodos = [...todos];
        newTodos[index].text = text;
        setTodos(newTodos);
        setIsEditing(false);
    };

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

    let editTodo = index => {
        setIsEditing(true);
        setId(index);
    };

    const canceltodo = () => {
        setIsEditing(false);
        var namerace = document.querySelectorAll('.allRaceContainer span');
        for(var i= 0; i< namerace.length; i++){
            namerace[i].style.fontWeight = 400;
        }
    }

    return (
        <div className="app">
            <div className="container">
                <h1 className="text-center mb-4">Race Days List</h1>
                {!isEditing && (
                <FormAddTodo addTodo={addTodo} />
                )}

                {isEditing && (
                    <EditTodo
                        id={id}
                        editTodo={editTodo}
                        updateTodo={updateTodo}
                        canceltodo={canceltodo}
                    />
                )}
                <div className="allRaceContainer">
                    { todos.map((todo, index) => (
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
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;