import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";

import { useSelector } from "react-redux";
import { getContacts } from "./redux/selectors";

const App = () => {
  // Отримуємо значення контактів із стану Redux
  const contacts = useSelector(getContacts);
  console.log(contacts);
  // const [contacts, setContacts] = useState([
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ]);
  // const [filter, setFilter] = useState("");

  // Завантаження даних з localStorage при монтуванні компонента
  // useEffect(() => {
  //   const storedData = localStorage.getItem("contacts");
  //   if (storedData) {
  //     setContacts(JSON.parse(storedData));
  //   }
  // }, []);

  // // Збереження даних у localStorage при зміні масиву contacts
  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (newContact) => {
  //   setContacts((prevState) => [...prevState, newContact]);
  // };

  // const handleFilter = (evt) => {
  //   setFilter(evt.target.value); // Оновлюємо значення фільтра
  // };

  // const handleDelete = (id) => {
  //   // Використовуємо метод filter для створення нового масиву, який не містить контакт з вказаним id
  //   const updatedContacts = contacts.filter((contact) => contact.id !== id);

  //   setContacts(updatedContacts);
  // };

  // const filteredContacts = contacts.filter(
  //   (contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     contact.number.toLowerCase().includes(filter.toLowerCase()) // Фільтрація
  // );
  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} />
      <h2>Contacts</h2>
      <div className="div_contact">
        {/* <Filter handleFilter={handleFilter} /> */}
        {contacts.map((contact) => (
          <ContactsList key={contact.id} contact={contact} />
        ))}
      </div>
    </section>
  );
};

export default App;
