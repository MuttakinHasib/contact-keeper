import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';
import contactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const { clearContacts } = useContext(contactContext);
  const { isAuthenticated, logout, user } = authContext;
  const onLogout = () => {
    logout();
    clearContacts();
  };
  const authLinks = (
    <>
      <li className='nav-item mr-5'>
        <strong className='nav-link'>Hello {user && user.name}</strong>
      </li>
      <li className='nav-item mr-5'>
        <a href='#!' className='nav-link' onClick={onLogout}>
          Logout
        </a>
      </li>
    </>
  );
  const guestLinks = (
    <>
      <li className='nav-item mr-5'>
        <Link to='/about' className='nav-link'>
          About
        </Link>
      </li>
      <li className='nav-item mr-5'>
        <Link to='/login' className='nav-link'>
          Login
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/register' className='nav-link'>
          Register
        </Link>
      </li>
    </>
  );
  return (
    <div className='navbar navbar-light bg-light border-bottom'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <i className={icon} /> {title}
        </Link>
        <ul className='navbar-nav flex-row'>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = { title: 'Contact Keeper' };

export default Navbar;
