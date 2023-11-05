import { Component } from "react";
import "./App.css";
import PhoneBook from "./components/PhoneBook";
import Contacts from "./components/Contacts";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  eventTargetInput = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value, number: event.target.value });
  };
  addContact = () => {
    const { contacts, name, number } = this.state;

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
    const { contacts, name } = this.state;
    return (
      <div>
        <PhoneBook
          name={name}
          eventTargetInput={this.eventTargetInput}
          onClick={this.addContact}
        />

        {contacts.map((contact) => (
          <Contacts key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default App;
