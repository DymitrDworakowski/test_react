import css from "./ContactsList.module.css";

import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilterContacts } from "../../redux/selectors";
import {NavLink} from "react-router-dom";
const ContactsList = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectFilterContacts);

  const handleDelete = (id) => dispatch(deleteContact(id));

  return (
    <div className={css.div_list}>
      {contact.map(({ name, email, phone, _id }) => (
        <ul className={css.list} key={_id}>
          <li>
            {name} : {phone} E-mail: {email}
          </li>\
          <NavLink to={`edit`}>
          <button
            type="edit"
            className={css.edite_button}
          >
            Edite
          </button></NavLink>
          <button
            type="delete"
            onClick={() => handleDelete(_id)} // Передаємо id контакту до handleDelete
            className={css.delete_button}
          >
            Delete
          </button>
        </ul>
      ))}
    </div>
  );
};

export default ContactsList;
