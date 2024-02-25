import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge, NavbarBrand } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";
import { appContext } from '../context/GlobalContext';
import { Link, NavLink } from 'react-router-dom';
function Header() {
  let {state:{cart}} = useContext(appContext);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBrand><Link className='links' to="/">Store</Link></NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
           <Link className='links me-2' to="/">Shop</Link>
           <Link className='links ms-2' to="/Cart">Cart</Link> 
          </Nav>
          <Nav>
             <Link to='/Cart'>
              <BsFillCartFill color='black' fontSize={'30px'} />
              <Badge bg='dark'>{cart.length}</Badge>
             </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header