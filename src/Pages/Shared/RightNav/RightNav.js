import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const { googleSignup } = useContext(AuthContext);
    const { facebookSignup } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignup(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleFacebookSignIn = () => {
        facebookSignup(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <ListGroup>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-danger">
                    <FaGoogle></FaGoogle> Login with Google
                </Button>

                <Button onClick={handleFacebookSignIn} variant="outline-primary">
                    <FaFacebook></FaFacebook> Login with Facebook
                </Button>
            </ListGroup>

            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaGithub /> GitHub</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                </ListGroup>
            </div>

            <div className='mt-4'>
                <h5>Our Brands</h5>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;