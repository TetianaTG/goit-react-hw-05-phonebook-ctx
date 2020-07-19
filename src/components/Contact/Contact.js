import React from "react";
import styles from "./Contact.module.css";

const ContactItem = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button
        type="button"
        className={styles.btnDelete}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
