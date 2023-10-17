import react from 'react';
import coyote from '../images/coyote.png'
import '../styles/logo.css'
function Logo(){
    return (
        <div className='coyote-logo-contenedor'>
            <img
                src={coyote}
                className='coyote-logo'
                alt=''/>
        </div>
    );
}

export default Logo;