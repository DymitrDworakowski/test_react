import css from "./ContactsList.module.css";

import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  editContact,
  statusFavorite,
} from "../../redux/contacts/operations";
import { selectFilterContacts } from "../../redux/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactModal from "../ContactModal/ContactModal";
const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);
  const [openId, setOpenId] = useState(null);
  const [editingContactId, setEditingContactId] = useState(""); // Додано стан для зберігання id редагованого контакту
  const [favorite, setFavorite] = useState(false);
  console.log(favorite);
  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteContact(id));
      setTimeout(() => {
        dispatch(fetchContacts());
      }, 100);
    },
    [dispatch]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const email = form.elements.email.value;
    const id = editingContactId;
    dispatch(editContact({ name, phone, email, id }));
    form.reset();
    handleClose();
    setTimeout(() => {
      dispatch(fetchContacts());
    }, 100);
  };

  const handleChangeFavorite = (id, favorite) => {
    setFavorite(favorite);
    dispatch(statusFavorite({ favorite, id }));
    setTimeout(() => {
      dispatch(fetchContacts());
    }, 100);
  };

  const handleOpen = (id) => {
    setOpenId(id);
    setEditingContactId(id);
  };

  const handleClose = () => setOpenId(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, handleDelete]);

  return (
    <div className={css.div_list}>
      {contacts.map(({ name, email, phone, _id, favorite }, index) => (
        <ul className={css.list} key={`${_id}-${index}`}>
          <li>Name: {name}</li>
          <li>Phone: {phone}</li>
          <li>E-mail: {email}</li>
          <span
            className={`${css.favorites} ${
              favorite ? css.isTrue : css.isFalse
            }`}
          ></span>
          <input
            className={css.checked}
            type="checkbox"
            checked={favorite} // Додайте це
            onChange={(e) => handleChangeFavorite(_id, e.target.checked)} // Змініть тут
          />
          <button
            type="edit"
            className={css.edite_button}
            onClick={() => handleOpen(_id)}
          >
            Edit
          </button>
          <button
            type="delete"
            onClick={() => handleDelete(_id)}
            className={css.delete_button}
          >
            Delete
          </button>
          <ContactModal
            open={openId === _id}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            name={name}
            email={email}
            phone={phone}
          />
        </ul>
      ))}
    </div>
  );
};

export default ContactsList;
