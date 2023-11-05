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

  handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    console.log(name, number);
    this.setState({ name, number });
    form.reset();
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
    const { contacts, name, number } = this.state;
    return (
      <div>
        <PhoneBook
          name={name}
          number={number}
          eventTargetInput={this.handleSubmit}
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
