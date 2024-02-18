import "./App.css";
import AuthNav from "./components/AuthNav/AuthNav";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactList/ContactsList";
import Filter from "./components/Filter/Filter";
import SimpleReactCalendar from "simple-react-calendar";

import { Routes, Route } from "react-router-dom";
import { fetchContacts } from "./redux/operations";
import { selectError, selectIsLoading } from "./redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <Routes>
        <AuthNav />
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>My Contacts</h2>
        <div className="div_contact">
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactsList />
        </div>
        <div className="div_calendar">
          <SimpleReactCalendar activeMonth={new Date()} />
        </div>
      </Routes>
    </section>
  );
};

export default App;
