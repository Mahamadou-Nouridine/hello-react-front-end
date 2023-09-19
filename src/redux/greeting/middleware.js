import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGreeting = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("http://localhost:3000/greeting/generate");
  const data = await response.json()
  console.log(data);
  return data;
});
