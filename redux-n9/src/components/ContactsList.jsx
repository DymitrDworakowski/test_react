import css from "./ContactsList.module.css";

import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import { selectContacts, selectFilter } from "../redux/selectors";

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => dispatch(deleteContact(id));

  return (
    <div className={css.div_list}>
      {filteredContacts.map(({ name, number, id }) => (
        <ul className={css.list} key={id}>
          <li>
            {name} : {number}
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
