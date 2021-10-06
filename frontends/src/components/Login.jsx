import React from 'react';

function Login({ username, password, setUsername, setPassword }) {
  return (
    <form>
      <input
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
    </form>
  );
}

export default Login;
