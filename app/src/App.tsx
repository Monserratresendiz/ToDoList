import React, { useState } from 'react';
/**import app from "../api/src/";
import index from "";
import axios from "axios"; **/


interface Login{
  onSubmit: (name: string, password: string, email:String, rol:String) => void;
}

const LoginForm: React.FC<Login> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, password, email, rol);
  };

  return (
    <div className= "container">
      <h2 className='tittle'>Inicio Sesión</h2>
      <form onSubmit={handleSubmit} className='form'>
        <div className='inputGroup'>
          <label htmlFor="username" className='label'>Usuario</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='input'
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="password" className='label'>Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input'
          />
        </div>
        <button type="submit" className='button'>Ingresar</button>
      </form>
    </div>
  );
};

const App: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    console.log('Usuario:', username, 'Contraseña:', password);
    // Aquí puedes agregar la lógica para validar el login o conectarte a un backend
    alert(`Usuario: ${username}\nContraseña: ${password}`);
  };

  return <LoginForm onSubmit={handleLogin} />;
};

export default App;