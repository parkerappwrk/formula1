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
    const [idObj, setIdObj] = useState("{}");
    const [todos, setTodos] = useState([
        {
            text: "Sample Race Day",
            isDone: false,
            id: 0
        },
        {
            text: "Sample Race Day New",
            isDone: false,
            id: 1
        }
    ]);

    /**
    * 
    * @param {*} text 
    * Comment: This function add the new todo List into the Array.
    */

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    /**
     * 
     * @param {*} text 
     * @param Integer index
     * @return
     * Comment: This update the Text in array
     */
    let updateTodo = (text,index) => {
        const newTodos = [...todos];
        newTodos[index].text = text;
        setTodos(newTodos);
        setIsEditing(false);
    };

    /**
    * 
    * @param {*} text 
    * Comment: This function mark the Todo list is completed.
    */

    const markTodo = index => {
        const newTodos = [...todos];
        if(newTodos[index].isDone === true) {
            newTodos[index].isDone = false;
        } else {
            newTodos[index].isDone = true;
        }
        setTodos(newTodos);
    };


    /**
    * 
    * @param {*} text 
    * Comment: This function used to remove a todo form the List
    */

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };


    /**
    * 
    * @param {*} text 
    * Comment: This lets you to edit a current added Todo.
    */

    let editTodo = index => {
        setIsEditing(true);
        const newTodos = [...todos];
        let bewObj = newTodos[index];
        setIdObj(bewObj);
        setId(index);
    };


    /**
    * 
    * @param {*} text 
    * Comment: This function add the new todo List into the Array.
    */

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
                        idObj={idObj}
                        updateTodo={updateTodo}
                        canceltodo={canceltodo}
                    />
                )}
                <div className="allRaceContainer">
                    { todos.map((todo, index) => (
                        <Card key={index}>
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