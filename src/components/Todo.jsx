import React from 'react';

const Todo = ({ done, description, id }) => {
  return (
    <div>
      <span>{description}</span>
      <input type="checkbox" checked={done} />
    </div>
  );
};

export default Todo;
