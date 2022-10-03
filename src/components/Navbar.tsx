import { Button, Container, Nav, Navbar as NavbarBS } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { IconContext } from 'react-icons';

export function Navbar() {
  return (
    <NavbarBS sticky='top' className='bg-white shadow-sm bm-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to={'/'} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={'/store'} as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to={'/about'} as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          variant='outline-primary'
          style={{ width: '3rem', height: '3rem', position: 'relative' }}>
          <IconContext.Provider value={{ size: '1.5rem' }}>
            <FiShoppingCart />
          </IconContext.Provider>
          <div
            className='rounded-circle bg-danger d-flex justify-content-center align-items-center '
            style={{
              color: 'white',
              width: '1.5rem',
              height: '1.5rem',
              position: 'absolute',
              bottom: '0',
              right: '0',
              transform: 'translate(25%, 25%)',
            }}>
            3
          </div>
        </Button>
      </Container>
    </NavbarBS>
  );
}
