import { Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';

import './App.css';

function App() {
  return (
    <UserProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </UserProvider>
  );
}

export default App;
