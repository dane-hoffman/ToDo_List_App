import React from 'react';
import { useForm } from 'react-hook-form';

const TodoForm = () => {
  // Destructuring methods from useForm
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  // State to manage tasks
  const [tasks, setTasks] = React.useState([]);

  // Function to handle form submission
  const onSubmit = (data) => {
    // Adding a new task to the tasks array
    setTasks([...tasks, data.task]);
    reset(); // Clear the input after submitting
  };

  return (
    <div>
      {/* Todo form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Input for task with validation */}
        <input {...register("task", { required: true })} />
        {/* Error message for required field */}
        {errors.task && <span>This field is required</span>}
        {/* Submit button */}
        <button type="submit">Add Task</button>
      </form>

      {/* List to display tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;

