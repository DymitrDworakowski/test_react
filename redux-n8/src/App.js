import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";

const App = () => {
  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <div className="div_contact">
        <Filter />
        <ContactsList />
      </div>
    </section>
  );
};

export default App;
