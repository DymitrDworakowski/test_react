import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";
import SimpleReactCalendar from 'simple-react-calendar';

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
      <SimpleReactCalendar activeMonth={new Date()} />
    </section>
  );
};

export default App;
