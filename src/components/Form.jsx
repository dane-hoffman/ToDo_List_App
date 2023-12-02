import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [task, setTask] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (task.trim()) {
      try {
        await axios.post('/api/addTask', { task });
        setTask('');
        console.log('Task added to the database!');
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Enter task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;

