import React from "react";
const ContactsList = ({ contact,handleDelete }) => {
  return (
   
    <ul>
      <li>
        {contact.name} : {contact.number}
      </li>
      <button type="delete" onClick={handleDelete} >Delete</button>
    </ul>
  );
};

export default ContactsList;
