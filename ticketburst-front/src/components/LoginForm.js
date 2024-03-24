import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function LoginForm(){

    const [loginDiv, setLoginDiv] = useState(true)
    const [form, setForm] = useState({
        username: "",
        password:""
    })

    function showRegister(){
      setLoginDiv(prevState=>!prevState)
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
                />
                
                
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-label="password"
                />
                
                <div className='d-flex gap-3'>
                    <Button variant="outline-secondary" className="button-hover-white">Login</Button>
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
                />

                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-label="username"
                />
                
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-label="password"
                />

                <Form.Control
                  type="password"
                  placeholder="Repeat Password"
                  aria-label="password2"
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