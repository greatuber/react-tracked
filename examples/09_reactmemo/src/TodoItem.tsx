import React from 'react';
import { memo } from 'react-tracked';

import { useDispatch, TodoType } from './store';

type Props = {
  todo: TodoType;
};

let numRendered = 0;

// Use custom memo instead of React.memo
const TodoItem = memo(({ todo }: Props) => {
  const dispatch = useDispatch();
  return (
    <li>
      numRendered: {++numRendered}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
      />
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.title}
      </span>
    </li>
  );
});

export default TodoItem;
