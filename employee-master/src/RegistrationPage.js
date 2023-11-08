import React, { useState } from 'react';

const RegistrationPage = () => {
  const initialFormState = {
    username: '',
    password: '',
  };

  const [formValues, setFormValues] = useState(initialFormState);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.username && formValues.password) {
      const newUser = {
        username: formValues.username,
        password: formValues.password,
      };
      setRegisteredUsers([...registeredUsers, newUser]);
      localStorage.setItem('registeredUsers', JSON.stringify([...registeredUsers, newUser]));
      setFormValues(initialFormState);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
