import css from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value; // Отримуємо значення number з форми
    dispatch(addContact({ name, number })); // Передаємо об'єкт зі значеннями name та number до екшена
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
          required
          placeholder="Name"
        />
        <p>Number</p>
        <input
          className={css.input}
          type="tel"
          name="number"
          required
          placeholder="Number"
        />
        <button type="submit" className={css.form_button}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
