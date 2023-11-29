import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevState) => [...prevState, newContact]);
  };

  const handleFilter = (evt) => {
    setFilter(evt.target.value); // Оновлюємо значення фільтра
  };

  const handleDelete = (id) => {
    // Використовуємо метод filter для створення нового масиву, який не містить контакт з вказаним id
    const updatedContacts = contacts.filter((contact) => contact.id !== id);

    setContacts(updatedContacts);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase()) // Фільтрація
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter handleFilter={handleFilter} />
      {filteredContacts.map((contact) => (
        <ContactsList
          key={contact.id}
          contact={contact}
          handleDelete={() => handleDelete(contact.id)}
        />
      ))}
    </div>
  );
};

export default App;
