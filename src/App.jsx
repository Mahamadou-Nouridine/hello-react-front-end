import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchGreeting } from "./redux/greeting/middleware";
import Greeting from "./components/Greeting";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  return (
    <>
      <Greeting />
    </>
  );
}

export default App;
