import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import useGlobalReducer from '../hooks/useGlobalReducer'

const ContactCard = ({ contact}) => {
  
  const { store, dispatch } = useGlobalReducer();

  const navigate = useNavigate();

  ///////////////////////////////////
  
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Contacts</h2>
        <Link to="/add-contact">
          <button className="btn btn-success">Add new contact</button>
        </Link>
      </div>
      <ul className="list-group">
        {store.contacts.map((contact) => (
          <li key={contact.id} className="contact-card">
            <div className="contact-info">
              <h5>{contact.name}</h5>
              <p className="mb-1"><i className="fa-solid fa-location-dot"></i> {contact.address}</p>
              <p className="mb-1"><i className="fa-solid fa-phone"></i> {contact.phone}</p>
              <p className="mb-0"><i className="fa-solid fa-envelope"></i> {contact.email}</p>
            </div>
            <div className="contact-actions">
            <Link to={`/edit-contact/${contact.id}`}>
                <button className="edit-btn"><i className="fa-solid fa-pencil"></i></button>
           </Link>
              <button className="delete-btn" onClick={() => deleteContact(contact.id)}><i className="fa-solid fa-trash-can"></i></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
   
  );
  
}

export default ContactCard