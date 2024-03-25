import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function LoginForm(props){
    //Login state and display

    const [loginDiv, setLoginDiv] = useState(true)
    const [formLogin, setFormLogin] = useState({
        email: "",
        password:""
    })

    function showRegister(){
      setLoginDiv(prevState=>!prevState)
    }

    function handleLoginForm(event){
      let name=event.target.name
      let value= event.target.value;

      setFormLogin({...formLogin,
        [name]:value}) 
    }

    function login(){
      props.onLoginSuccess()
    }

    //Register state

    const [formRegister, setFormRegister] = useState({
      email: "",
      username: "",
      password: "",
    })

    function handleRegisterForm(event){
      let name=event.target.name
      let value= event.target.value;

      setFormRegister({
        ...formRegister,
        [name]:value,
      })
    }

    return (
      <div className="loginForm">
        <Container>
          <Row>
            {loginDiv &&
            <Col xs={12} lg={6} md={6} className='d-flex justify-content-start align-items-center'>
              <form className="w-100 d-flex  flex-column align-items-center gap-3">
                
                <Form.Control
                  type="email"
                  placeholder="example@mail.com"
                  aria-label="email"
                  name="email"
                  onChange={handleLoginForm}
                  value={formLogin.email}
                />
                
                
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-label="password"
                  name='password'
                  onChange={handleLoginForm}
                  value={formLogin.password}
                />
                
                <div className='d-flex gap-3'>
                    <Button variant="outline-secondary" className="button-hover-white" onClick={login}>Login</Button>
                    <Button variant="outline-secondary" className='button-hover-white' onClick={showRegister}>Registrarse</Button>
                </div>
                
              </form>
            </Col>
            }
            {
              !loginDiv &&
              <Col xs={12} lg={6} md={6} className='d-flex justify-content-start align-items-center'>
              <form className="w-100 d-flex  flex-column align-items-center gap-3">
                
                <Form.Control
                  type="email"
                  placeholder="example@mail.com"
                  aria-label="email"
                  name='email'
                  onChange={handleRegisterForm}
                  value={formRegister.email}
                />

                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-label="username"
                  name="username"
                  onChange={handleRegisterForm}
                  value={formRegister.username}
                />
                
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-label="password"
                  name="password"
                  onChange={handleRegisterForm}
                  value={formRegister.password}
                />

                <Form.Control
                  type="password"
                  placeholder="Repeat Password"
                  aria-label="password2"
                  name="password2"
                  onChange={handleRegisterForm}
                />
                
                <div className='d-flex gap-3 align-items-center'>
                    <Button variant="outline-secondary" className='button-hover-white'>Registrarse</Button>
                    or <label onClick={showRegister}>Login</label>
                </div>
                
              </form>
            </Col>
            }
            <Col xs={6}>
                
            </Col>
          </Row>
        </Container>
      </div>
    );
}