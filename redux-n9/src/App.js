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
      <h2>My Contacts</h2>
      <div className="div_contact">
        <Filter />
        <ContactsList />
      </div>
      <div className="div_calendar" >
      <SimpleReactCalendar activeMonth={new Date()} />
      </div>
    </section>
  );
};

export default App;
