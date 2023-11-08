import React, { useState } from 'react';

const LoginPage = () => {
  const initialFormState = {
    username: '',
    password: '',
  };

  const [loginFormValues, setLoginFormValues] = useState(initialFormState);
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem('registeredUsers')) || []
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormValues({ ...loginFormValues, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = registeredUsers.find(
      (user) =>
        user.username === loginFormValues.username && user.password === loginFormValues.password
    );
    if (foundUser) {
      setIsLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome, {loginFormValues.username}!</h2>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={loginFormValues.username}
              onChange={handleLoginChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={loginFormValues.password}
              onChange={handleLoginChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
