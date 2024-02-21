import css from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";

const EditContact = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value; // Отримуємо значення number з форми
    const email = form.elements.email.value;
    dispatch(editContact({ name, phone, email })); // Передаємо об'єкт зі значеннями name та number до екшена
    form.reset();
  };

  return (
    <div className={css.div_form}>
      <form className={css.form} onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Name"
        />
        <p>Email</p>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email"
        />
        <p>Number</p>
        <input
          className={css.input}
          type="tel"
          name="phone"
          placeholder="phone"
        />

        <button type="submit" className={css.form_button}>
        Сonfirm changes
        </button>
      </form>
    </div>
  );
};

export default EditContact;
