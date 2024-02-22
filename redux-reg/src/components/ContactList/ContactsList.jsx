import css from "./ContactsList.module.css";

import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { selectFilterContacts } from "../../redux/selectors";

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);
  const [openId, setOpenId] = useState(null);
  const [editingContactId, setEditingContactId] = useState(""); // Додано стан для зберігання id редагованого контакту



  const handleDelete = (id) => dispatch(deleteContact(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const email = form.elements.email.value;
    const id = editingContactId;
    console.log(id);
    dispatch(editContact({ name, phone, email, id })); // Використовуємо id редагованого контакту для оновлення
    form.reset();
    handleClose(); // Закриття модального вікна після відправки форми
    
  };

  const handleOpen = (id) => {
    setOpenId(id);
    setEditingContactId(id); // Встановлення id редагованого контакту при відкриванні модального вікна
  };

  const handleClose = () => setOpenId(null);
  return (
    <div className={css.div_list}>
      {contacts.map(({ name, email, phone, _id }) => (
        <ul className={css.list} key={_id}>
          <li>
            {name} : {phone} E-mail: {email}
          </li>
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
          <Modal
            open={openId === _id}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className={css.div_form}>
              <form className={css.form} onSubmit={handleSubmit}>
                <p>Name</p>
                <input
                  className={css.input}
                  type="text"
                  name="name"
                  placeholder="Name"
                  defaultValue={name}
                />
                <p>Email</p>
                <input
                  className={css.input}
                  type="email"
                  name="email"
                  placeholder="Email"
                  defaultValue={email}
                />
                <p>Number</p>
                <input
                  className={css.input}
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  defaultValue={phone}
                />
                <button type="submit" className={css.form_button}>
                  Confirm changes
                </button>
              </form>
            </div>
          </Modal>
        </ul>
      ))}
    </div>
  );
};

export default ContactsList;
