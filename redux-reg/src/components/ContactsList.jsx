import css from "./ContactsList.module.css";

import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/operations";
import { selectFilterContacts } from "../redux/selectors";

const ContactsList = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectFilterContacts);

  const handleDelete = (id) => dispatch(deleteContact(id));

  return (
    <div className={css.div_list}>
      {contact.map(({ name, phone, id }) => (
        <ul className={css.list} key={id}>
          <li>
            {name} : {phone}
          </li>
          <button
            type="delete"
            onClick={() => handleDelete(id)} // Передаємо id контакту до handleDelete
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
