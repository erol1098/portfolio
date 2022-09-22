import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      sticky='top'
      className='py-3'
      style={{ minHeight: '6rem', fontSize: '1.4rem' }}
    >
      <Container>
        <Navbar.Brand href='#'>
          {/* <img
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-erol1098.appspot.com/o/logo.png?alt=media&token=44c02a12-607f-426c-8523-7dac3d4c2f81'
            alt='logo'
            width={80}
            className='rounded-circle'
          /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
