import React, { useState, useEffect } from 'react';
import Login from '../components/Login';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function Home() {
  const [userApi, setUserApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userRedirect, setUserRedirect] = useState(false);
  const [warning, setWarning] = useState(false);
  const { setUser } = useUser();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('/users');
      setUserApi(response.data);
      setLoading(false);
    };
    fetchUsers();
  }, [loading]);

  const handleClick = () => {
    const findUser = userApi.find(
      (e) => e.username === username && e.password === password
    );
    if (!findUser) return setWarning('Não encontrado');
    setUser(findUser);
    setUserRedirect(true);
  };

  return (
    <div>
      {loading ? (
        <h1>Está carregando</h1>
      ) : (
        <section>
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
          <button type="button" onClick={handleClick}>
            Entrar
          </button>
          <Link to="/register">
            <button type="button">Registrar</button>
          </Link>
          {warning && warning}
          {userRedirect && <Redirect to="/profile" />}
        </section>
      )}
    </div>
  );
}

export default Home;
