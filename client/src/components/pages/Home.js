import React, { useContext, useEffect } from 'react';
import Contacts from '../Contacts/Contacts';
import ContactForm from '../Contacts/ContactForm';
import ContactFilter from '../Contacts/ContactFilter';
import { AuthContext } from '../../context/auth/AuthContext';
import Spinner from '../layouts/Spinner/Spinner';

const Home = props => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return !authContext.isAuthenticated ? (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ width: '100%', height: '80vh' }}
    >
      <Spinner />
    </div>
  ) : (
    <div className='row mt-5'>
      <div className='col-6'>
        <ContactForm />
      </div>
      <div className='col-6'>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
