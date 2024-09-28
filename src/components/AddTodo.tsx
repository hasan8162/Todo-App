import { ChangeEvent, FormEvent, useState } from "react";
import React from "react";

type Props = {
    handleAddNewTodo: Function;
};

const AddTodo = (props: Props) => {
    const [title, setTitle] = useState("");
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTodo = {id: new Date().getTime().toString(), title};
        props.handleAddNewTodo(newTodo);
        setTitle("");
    };

    return <form onSubmit={handleSubmit}>
        <div className = "form-input">
            <label htmlFor="title">Todo Title: </label>
            <input type = "text" value={title} name="title" onChange={handleChange} required autoFocus/>
        </div>
        <button type="submit">Add Todo</button>
    </form>
};

export default AddTodo;