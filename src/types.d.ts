interface Todo {
  text: string;
}

type AddTodo = (text: string) => void;
type removeTodo = (text: string) => void;
