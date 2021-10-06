import React, { useState } from 'react';
import RegisterInputs from '../components/RegisterInputs';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState(false);
  const [userRedirect, setUserRedirect] = useState(false);

  const handleClick = async () => {
    const user = await axios.get('/users');
    if (user.data.some((e) => e.username === username))
      return setWarning('Username já existente');
    if (user.data.some((e) => e.email === email))
      return setWarning('Email já existente');
    if (!/^\w+@\w+\.com(\.br)?$/.test(email))
      return setWarning('Email inválido');
    if (username.length < 3) return setWarning('Username inválido');
    if (password.length < 6) return setWarning('Password inválido');

    await axios.post('/users', { email, username, password });
    setUserRedirect(true);
  };

  return (
    <div>
      <RegisterInputs
        email={email}
        setEmail={setEmail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <button type="button" onClick={handleClick}>
        Registrar
      </button>
      <Link to="/">
        <button type="button">Voltar para a tela de login</button>
      </Link>
      {warning && warning}
      {userRedirect && <Redirect to="/" />}
    </div>
  );
}

export default Register;
