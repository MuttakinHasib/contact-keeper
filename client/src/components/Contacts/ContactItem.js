import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className='card card-body my-3'>
      <h3 className='text-left'>
        {name}{' '}
        <small
          className={`badge float-right ${
            type === 'professional' ? 'bg-success' : 'bg-primary'
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </small>
      </h3>
      <ul className='list-group my-3'>
        {email && (
          <li className='list-group-item'>
            <i className='fas fa-envelope-open'></i> {email}
          </li>
        )}

        {phone && (
          <li className='list-group-item'>
            <i className='fas fa-phone'></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn mr-2 btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default ContactItem;
