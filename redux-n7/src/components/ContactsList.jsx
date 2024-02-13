import css from "./ContactsList.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/actions";

const ContactsList = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ul className={css.list}>
      <li>
        {contact.name} : {contact.number}
      </li>
      <button
        type="delete"
        onClick={handleDelete}
        className={css.delete_button}
      >
        Delete
      </button>
    </ul>
  );
};

export default ContactsList;
