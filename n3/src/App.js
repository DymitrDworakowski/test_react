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

  // handleChangeName = (evt) => {
  //   console.log({ name:evt.target.value  });

  //   this.setState({ name:evt.target.value} );
  // };
  // handleChangeNumber = (evt) => {
  //   console.log({ number:evt.target.value  });

  //   this.setState({ number:evt.target.value} );
  // };


  handleChangeInput = (evt) =>{
    this.setState({[evt.target.name]:evt.target.value});
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    
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
    const { contacts, } = this.state;
    return (
      <div>
        <PhoneBook
          handleSubmit={this.handleSubmit}
          handleChangeInput ={this.handleChangeInput}
          
        />

        {contacts.map((contact) => (
          <Contacts key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default App;
