import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  if (greeting.isLoading) return <div>...loading</div>;
  if (greeting.error) return <div>An error occured when loading the data</div>;
  return <div>{greeting.greeting}</div>;
  // return (<div>greeting</div>)
};

export default Greeting;
