import React, {useState, useContext, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

const initialContact = {
  name: '',
  email: '',
  phone: '',
  type: 'personal',
};

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const {addContact, updateContact, clearCurrent, current} = contactContext;

  useEffect(
    () => {
      if (current !== null) {
        setContact(current);
      } else {
        setContact(initialContact);
      }
    },
    [contactContext, current],
  );

  const [contact, setContact] = useState({...initialContact});

  const {name, email, phone, type} = contact;

  const onChange = e =>
    setContact({...contact, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    if (!current) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    clearCurrent();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        id="typePersonal"
        value="personal"
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      <label htmlFor="typePersonal">Personal</label>{' '}
      <input
        type="radio"
        name="type"
        id="typeProfessional"
        value="professional"
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      <label htmlFor="typeProfessional">Professional</label>
      <div>
        <input
          type="submit"
          value={current ? 'Update Contact' : 'Add Contact'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
