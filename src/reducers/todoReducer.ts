export const initialState = {
  todos: [],
};

const todoReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "UPDATE_TODO": {
      const { id, newTask } = action.payload;

      const updatedTodos = state.todos.map((todo: any) => {
        todo.id === id ? { ...todo, task: newTask } : todo;
      });

      return {
        ...state,
        todos: updatedTodos,
      };
    }

    case "COMPLETE_TODO": {
      const prevTodos = [...state.todos];
      const { id } = action.payload;

      const updatedTodos = prevTodos.map((todo: any) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      return {
        ...state,
        todos: updatedTodos,
      };
    }

    case "REMOVE_TODO": {
      const { id } = action.payload;

      const updatedTodos = state.todos.filter((todo: any) => todo.id !== id);

      return {
        ...state,
        todos: updatedTodos,
      };
    }

    case "FILTER_TODO": {
      const filteredTodo = state.todos.filter((todo: any) => todo.completed);

      return {
        ...state,
        todos: filteredTodo,
      };
    }

    case "CLEAR_TODO":
      return [];

    default:
      throw new Error("Unhandled action " + action.type);
  }
};

export default todoReducer;
