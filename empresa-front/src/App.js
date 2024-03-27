//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Formulario from "./Componentes/Formulario"

function App() {
  const [isLog,setIsLog] = useState(false);

  function handleLogin(){
    setIsLog(true);
  }

  return (
    <div>
      {!isLog && <Formulario onLoginSuccess={handleLogin}/>}
    </div>
  );
}

export default App;
