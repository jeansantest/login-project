import React from 'react';

function RegisterInputs({
  email,
  username,
  password,
  setEmail,
  setUsername,
  setPassword,
}) {
  return (
    <form>
      <input
        type="text"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
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

export default RegisterInputs;
