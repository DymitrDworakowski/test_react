import React from "react";
const Contacts = ({ contact }) => {
  return (
   
    <ul>
      
      <li>
        {contact.name} : {contact.number}
      </li>
    </ul>
  );
};

export default Contacts;
