import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import LeftNav from '../LeftNav/LeftNav';
import './Header.css'

function Header() {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link className='title' to='/'>Gazette</Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='link ms-2' to="/">Home</Link>
                        <Link className='link ms-4' to="/profile">Profile</Link>
                    </Nav>

                    <Nav className='d-flex align-items-center'>
                        <>
                            {
                                user?.uid
                                    ?
                                    <>
                                        <span className='display-name'>{user?.displayName}</span>
                                        <Link to='/' className='link p-0 mx-3' onClick={handleLogOut}>Log Out</Link>
                                    </>
                                    :
                                    <>
                                        <Link className='link me-3' to="/login">Login</Link>
                                        <Link className='link' to="/signup">Sign Up</Link>
                                    </>
                            }
                        </>

                        <>
                            {
                                user?.photoURL
                                    ?
                                    <Image style={{ height: '30px' }} src={user?.photoURL} roundedCircle></Image>
                                    :
                                    <FaUser></FaUser>
                            }
                        </>
                    </Nav>

                    <Nav className='d-lg-none'>
                        <LeftNav></LeftNav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;