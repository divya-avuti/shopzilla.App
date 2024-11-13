import React from 'react';
import Login from './../components/auth/login';
import Signup from './../components/auth/signup';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Marketplace</h1>
      <Login/>
      <Signup/>
    </div>
  );
};

export default Home;
