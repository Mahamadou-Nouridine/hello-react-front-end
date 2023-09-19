import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchGreeting = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('http://localhost:3000/greeting/generate');
  const data = await response.json();
  return data;
});

export default fetchGreeting;
