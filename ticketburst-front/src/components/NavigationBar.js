import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavigationBar(props){
    
    return (
      <Navbar expand="lg" bg="primary">
        <Container fluid>
        <Button onClick={()=>props.handleDisplayLogin()}><img src="./images/user.png" width="50px"/></Button>
          <Navbar.Brand href="#" className="mx-auto">
            <img src="./images/ticketburst-blanco.png" width="200px" />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse
            id="navbarCollapse"
            className="justify-content-end my-3"
          >
            <Form className="row g-4 w-100 justify-content-end">
              <div className="d-flex align-items-center col-lg-5 col-md-10 col-sm-12">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12">
                <Button variant="outline-secondary" className="w-100">
                  Search
                </Button>
              </div>
            </Form>
          </Navbar.Collapse>
          
        </Container>
       
      </Navbar>
    );
    

}