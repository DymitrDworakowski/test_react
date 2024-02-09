import css from "./ContactsList.module.css";



const ContactsList = ({ contact, handleDelete }) => {
  return (
    <ul className={css.list}>
      <li>
        {contact.name} : {contact.number}
      </li>
      <button type="delete" onClick={handleDelete} className={css.delete_button}>
        Delete
      </button>
    </ul>
  );
};

export default ContactsList;
