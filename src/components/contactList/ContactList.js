import React from "react";
import Contact from "../Contact/Contact";
import FilterContacts from "../filterContacts/FilterContacts";

const ContactList = ({ contacts, filter, onChange, deleteContact }) => {
  return (
    <>
      <h2 style={{ marginLeft: "30px" }}>Contacts</h2>
      <FilterContacts filter={filter} onChange={onChange} />
      <ul>
        {contacts.map((contact) => (
          <Contact
            contact={contact}
            key={contact.id}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
