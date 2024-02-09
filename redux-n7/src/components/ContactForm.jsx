import { nanoid } from "nanoid"; // Імпорт nanoid
import { useState } from "react";
import css from './ContactForm.module.css';

const ContactForm = ({ contacts, onAddContact }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
  });




  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Отримайте функцію onAddContact через props

    if (contacts.some((contact) => contact.name === formData.name)) {
      alert(`${formData.name} is already in the contact list`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: formData.name,
      number: formData.number,
    };

    onAddContact(newContact); // Викликайте onAddContact, якщо контакт додано

    setFormData({
      name: "",
      number: "",
    });
  };

  const handleChangeInput = (evt) => {
    // Деструктуризація подій для отримання name та value зі змінної target
    const { name, value } = evt.target;

    // Використовуємо setFormData для оновлення стану
    setFormData((prevData) => ({
      // Використовуємо розпросторення для копіювання попереднього стану
      ...prevData,
      // Оновлюємо значення відповідного поля (name) з новим значенням (value)
      [name]: value,
    }));
  };

  return (
    <div className={css.form}>
    <form onSubmit={handleSubmit} >
      <p>Name</p>
      <input className={css.input}
        type="text"
        name="name"
        required
        placeholder="Name"
        value={formData.name}
        onChange={handleChangeInput}
      />
      <p>Number</p>
      <input className={css.input}
        type="tel"
        name="number"
        required
        placeholder="Number"
        value={formData.number}
        onChange={handleChangeInput}
      />
      <button type="submit" className={css.form_button}>Add contact</button>
    </form>
    </div>
  );
};

export default ContactForm;
