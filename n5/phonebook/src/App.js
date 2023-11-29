import { Component } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";


class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    
  };

  // handleChangeName = (evt) => {
  //   console.log({ name:evt.target.value  });

  //   this.setState({ name:evt.target.value} );
  // };
  // handleChangeNumber = (evt) => {
  //   console.log({ number:evt.target.value  });

  //   this.setState({ number:evt.target.value} );
  // };

addContact = (newContact) => {
  this.setState((prevState) => ({
    contacts: [...prevState.contacts, newContact],
  }));
  };
  
  handleFilter = (evt) => {
    this.setState({ filter: evt.target.value }); // Оновлюємо значення фільтра
  };

 handleDelete = (id) => {
  const { contacts } = this.state;

  // Використовуємо метод filter для створення нового масиву, який не містить контакт з вказаним id
  const updatedContacts = contacts.filter((contact) => contact.id !== id);

  this.setState({ contacts: updatedContacts });
  };
  
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase()) // Фільтрація 
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={contacts} onAddContact={this.addContact}
          
        />
          <h2>Contacts</h2>
        <Filter handleFilter ={this.handleFilter} />
        {filteredContacts.map((contact) => (
          <ContactsList key={contact.id} contact={contact} handleDelete={() => this.handleDelete(contact.id)} />
        ))}
      </div>
    );
  }
}

export default App;

