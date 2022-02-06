import React from "react";
import todoReducer, { initialState } from "../reducers/todoReducer";

const TodoList = () => {
  const [state, dispatch] = React.useReducer(todoReducer, initialState);
  const [task, setTask] = React.useState("");

  const handleKeydown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();

      dispatch({
        type: "ADD_TODO",
        payload: {
          id: Date.now(),
          task: e.target.value,
          completed: false,
        },
      });

      setTask("");
    }
  };

  const removeTodo = (todoId: any) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: {
        id: todoId,
      },
    });
  };

  const toggleComplete = (todoId: any) => {
    console.log(todoId);
    dispatch({
      type: "COMPLETE_TODO",
      payload: {
        id: todoId,
      },
    });
  };

  const filtereCompletedTodo = () => {
    dispatch({
      type: "FILTER_TODO",
      payload: {},
    });
  };

  return (
    <div>
      <div className='ui fluid icon input'>
        <input
          type='text'
          value={task}
          onChange={e => setTask(e.target.value)}
          onKeyDown={handleKeydown}
        />
      </div>
      <div className='ui button primary' onClick={() => filtereCompletedTodo()}>
        test
      </div>
      {!state.todos.length ? (
        <>
          <p>No todo</p>
        </>
      ) : (
        state.todos.map((todo: any) => {
          return (
            <div key={todo.id} className='ui middle aligned divided list'>
              <div className='item'>
                <div className='right floated content'>
                  <div
                    className='ui button green'
                    onClick={() => toggleComplete(todo.id)}
                  >
                    Complete
                  </div>
                  <div
                    className='ui button red'
                    onClick={() => removeTodo(todo.id)}
                  >
                    X
                  </div>
                </div>
                <div
                  className='content'
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.task}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default TodoList;
