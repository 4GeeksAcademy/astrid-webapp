import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import ContactCard from '../components/Contactcard';



const ContactList = () => {
  const { store, dispatch } = useGlobalReducer();
  

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/SMartinGonzalez/contacts");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch({ type: "LOAD_CONTACTS", payload: data.contacts });
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, [dispatch]);

  const deleteContact = (id) => {
    fetch(`https://playground.4geeks.com/contact/agendas/SMartinGonzalez/contacts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete contact");
        }
        
        dispatch({ type: "DELETE_CONTACT", payload: id });
      })
      .catch((error) => console.error("Error deleting contact:", error));
  };
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Contacts</h2>
        <Link to="/add-contact">
          <button className="btn btn-success">Add new contact</button>
        </Link>
      </div>
      <div className=" ">
				{store. contacts.map((value, index) => {
					return (
						<ContactCard key={index} contact={value} />
					)
				})}
			</div>
    </div>
   
  );
};

export default ContactList