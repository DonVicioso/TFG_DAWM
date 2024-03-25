import './App.css';
import './Alternative.css';
import NavigationBar from './components/NavigationBar';
import LoginForm from './components/LoginForm';
import { useState, useEffect } from 'react';
function App() {

  const [displayForm, setDisplayForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn]= useState(false)

  function handleDisplay(){
    setDisplayForm(prevState=>!prevState)
  }

  function handleLogginSuccess(){
    setIsLoggedIn(true)
  }

  function handleClickOut(event){
     if (event.target.classList.contains('backdrop')){
    setDisplayForm(false)
    }
  }
  
  return (
    <div>
    <NavigationBar handleDisplayLogin={handleDisplay}/>

    {displayForm && !isLoggedIn && 
    <div onClick={handleClickOut} className='backdrop'>
    <LoginForm onLoginSuccess={handleLogginSuccess}/>
    </div>
    }
    </div>
  );
}

export default App;
