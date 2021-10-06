import React from 'react';
import { useUser } from '../context/UserContext';

function Profile() {
  const { user } = useUser();
  return (
    <div>
      <h1>{user.username}</h1>
      <h1>{user.email}</h1>
      <h1>
        {user.permission === 1 ? 'Você é administrador' : 'Você é usuário'}
      </h1>
    </div>
  );
}

export default Profile;
