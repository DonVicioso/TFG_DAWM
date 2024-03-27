import { useState } from 'react';
import {Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Formulario(props) {
    const [formLogin, setFormLogin] = useState({
        email: "",
        password:""
    })

    function handleLoginForm(event){
        let name=event.target.name
        let value= event.target.value;
  
        setFormLogin({...formLogin,
          [name]:value}) 
    }
  
    function login(){
        props.onLoginSuccess()
    }
      
    
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 mt-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="formBasicEmail">Correo</Form.Label>
                <Form.Control type="email" placeholder="Introduzca el Correo" onChange={handleLoginForm}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label htmlFor="formBasicPassword">Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" onChange={handleLoginForm}/>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={login}>
                Iniciar Sesión
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }

export default Formulario;
