// const ContactForm = ({ handleSubmit, handleChangeInput }) => {
//   return (
//     <form onSubmit={handleSubmit}>
//       <p>Name</p>
//       <input type="text" name="name"  required placeholder="name." onChange={handleChangeInput}/>
//       <p>Number</p>
//       <input type="tel" name="number"  required placeholder="tel." onChange={handleChangeInput} />
//       <button type="submit" >
//         Add contct
//       </button>
//     </form>
    
//   );
// };

// export default ContactForm;
import { Component } from "react";
import { nanoid } from "nanoid"; // Імпорт nanoid

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { name, number } = this.state;
    const { contacts, onAddContact } = this.props; // Отримайте функцію onAddContact через props

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in the contact list`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    onAddContact(newContact); // Викликайте onAddContact, якщо контакт додано

    this.setState({
      name: "",
      number: "",
    });
  };

  handleChangeInput = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          value={name}
          onChange={this.handleChangeInput}
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          required
          placeholder="Number"
          value={number}
          onChange={this.handleChangeInput}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;