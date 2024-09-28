export type TodoType = {
    
    id: string;
    title: string;
};

export type TodoProps = {
    todo: TodoType;
    handleDeleteTodo: Function;
};

export type TodosProps = {
    todos: TodoType[];
    handleDeleteTodo: Function;
};