import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const loginUser = {
    email: "123@gmail.com",
    password: "123"
  }

  const [user, setUser] = useState({ email: '' });
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);

    if (details.email === loginUser.email && details.password === loginUser.password) {
      console.log("Logged In");
      setUser({
        email: details.email
      });
    } else {
      console.log("Le credenziali non sono valide!");
      setError("Le credenziali non sono valide!")
    }
  }

  const Logout = () => {
    setUser({ email: '' });
  }

  return (
    <div className="App">
      {(user.email != '') ? (
        <div className="Welcome">
          <h2>Benvenuto, <span>{user.email}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
