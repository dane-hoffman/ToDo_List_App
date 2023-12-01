// ./src/api/client.js
const BASE_URL = 'http://localhost:8080'; // Replace with your backend server URL

// Function to fetch tasks from the server
export const fetchTasks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`);
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

// Function to add a task to the server
export const addTask = async (task) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task }),
    });
    if (!response.ok) {
      throw new Error('Failed to add task');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

// Other API functions for different endpoints...
