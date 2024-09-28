import React from "react"
import Todo from "./todo";
import { TodosProps } from "../types";


const Todos = (props:TodosProps) => {

    return (
        <section className="todos">
            {
                props.todos.map(todo => <Todo key={todo.id} todo={todo}
                handleDeleteTodo={props.handleDeleteTodo}
            />)}
        </section>
    ); 
};

export default Todos;