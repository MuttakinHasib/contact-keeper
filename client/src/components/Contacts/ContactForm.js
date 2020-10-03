import React, { useContext, useEffect, useState } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    current !== null
      ? setContact(current)
      : setContact({ name: '', email: '', phone: '', type: 'personal' });
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });
  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' && email === '') return;
    !current ? addContact(contact) : updateContact(contact);
    setContact({ name: '', email: '', phone: '', type: 'personal' });
  };

  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>{current ? 'Edit' : 'Add Contact'}</h2>
      <div className='mb-3'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Name'
          value={name}
          onChange={onChange}
        />
      </div>
      <div className='mb-3'>
        <input
          type='email'
          name='email'
          className='form-control'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />
      </div>
      <div className='mb-3'>
        <input
          type='text'
          name='phone'
          className='form-control'
          placeholder='Phone'
          value={phone}
          onChange={onChange}
        />
      </div>
      <div className='mb-3'>
        <input
          type='radio'
          name='type'
          className='form-check-input'
          value='personal'
          checked={type === 'personal'}
          onChange={onChange}
        />{' '}
        Personal{' '}
        <input
          type='radio'
          name='type'
          className='form-check-input'
          value='professional'
          checked={type === 'professional'}
          onChange={onChange}
        />{' '}
        Professional{' '}
      </div>
      <div className='mb-3'>
        <input
          type='submit'
          className='btn btn-success mr-3'
          value={current ? 'Update' : 'submit'}
        />
        {current && (
          <button className='btn btn-secondary' onClick={clearAll}>
            Clear
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
