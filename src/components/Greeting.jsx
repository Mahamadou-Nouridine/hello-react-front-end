import React from "react";
import { useSelector } from "react-redux";

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
    return greeting.isLoading ? (
      <div>...loading</div>
    ) : greeting.error ? (
      <div>An error occured when loading the data</div>
    ) : (
      <div>{greeting.greeting}</div>
    );
  // return (<div>greeting</div>)
};

export default Greeting;
