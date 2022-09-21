import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar
      as={'footer'}
      expand='lg'
      variant='dark'
      bg='dark'
      style={{ height: '4rem', fontSize: '1.2rem' }}
    >
      <Container>
        <Navbar.Brand>
          © {new Date().getFullYear()} by Erol Mahmutoglu. All rights reserved.
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;
