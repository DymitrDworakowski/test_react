import { Component } from "react";
import "./App.css";
import PhoneBook from "./components/PhoneBook";
import Contacts from "./components/Contacts";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  // handleChangeName = (evt) => {
  //   console.log({ name:evt.target.value  });

  //   this.setState({ name:evt.target.value} );
  // };
  // handleChangeNumber = (evt) => {
  //   console.log({ number:evt.target.value  });

  //   this.setState({ number:evt.target.value} );
  // };

  handleChangeInput = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleFilter = (evt) => {
    this.setState({ filter: evt.target.value }); // Оновлюємо значення фільтра
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { contacts, name, number } = this.state;
    if (contacts.some((contact) => contact.name === name)) {
      alert( `${name} is already in the contact list` );
      return; // Перервати виконання функції, якщо ім'я вже існує
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };


    // Копіюємо поточний масив контактів і додаємо до нього новий контакт
    const newContacts = [...contacts, newContact];

    this.setState({
      contacts: newContacts,
      name: "",
      number: "",
    });
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
        <PhoneBook
          handleSubmit={this.handleSubmit}
          handleChangeInput={this.handleChangeInput}
        />
        <div>
          <h1>Contacts</h1>
          <p>Find contact by name</p>
          <input  type="text"
            value={filter}
            onChange={this.handleFilter} />
        </div>
        {
        filteredContacts.map((contact) => (
          <Contacts key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default App;
