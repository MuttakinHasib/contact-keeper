import React, { useContext, useEffect } from 'react';
import Contacts from '../Contacts/Contacts';
import ContactForm from '../Contacts/ContactForm';
import ContactFilter from '../Contacts/ContactFilter';
import { AuthContext } from '../../context/auth/AuthContext';

const Home = props => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
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
