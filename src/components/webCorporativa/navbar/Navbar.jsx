import { Container } from '@mui/material';

import './styles.css';
export const Navbar = () => {
  return (
    <>
      <nav className='nav container'>
        <h3 className='nav-title'>GoingOut</h3>
        <div className='navegador'>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Sobre nosotros</a>
            </li>
            <li>
              <a>Nuestro producto</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </div>
        {/* <Link to='signIn' className='btn btn-secondary'>
            Sign In
          </Link> */}
      </nav>
    </>
  );
};
