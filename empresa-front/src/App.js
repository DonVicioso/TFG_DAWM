//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Formulario from "./Componentes/Formulario"
import Botones from "./Componentes/Botones"

function App() {
  const [isLog,setIsLog] = useState(false);

  function handleLogin(){
    setIsLog(true);
  }

  return (
    <div>
      {!isLog && <Formulario onLoginSuccess={handleLogin}/>}
      {isLog && <div>
        <Botones texto="Añadir Eventos"/>
        <Botones texto="Eliminar Eventos"/>
        <Botones texto="Cerrar Sesion"/>
        </div>}
    </div>
  );
}

export default App;
