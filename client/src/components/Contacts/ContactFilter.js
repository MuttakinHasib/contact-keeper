import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const text = useRef('');

  useEffect(() => {
    if (contactContext.filtered === null) {
      text.current.value = '';
    }
  }, [contactContext.filtered]);

  const onChange = e => {
    if (text.current.value !== '') {
      contactContext.filterContacts(e.target.value);
    } else {
      contactContext.clearFilter();
    }
  };
  return (
    <form>
      <div className='mb-3'>
        <input
          ref={text}
          type='text'
          className='form-control'
          placeholder='Filter Contacts...'
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default ContactFilter;
