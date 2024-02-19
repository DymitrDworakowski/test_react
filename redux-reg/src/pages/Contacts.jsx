import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../pages/Contacts.module.css";

import { Helmet } from "react-helmet";
import ContactsList from "../components/ContactList/ContactsList";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import SimpleReactCalendar from "simple-react-calendar";

import { fetchContacts } from "../redux/contacts/operations";
import { selectIsLoading } from "../redux/selectors";

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>My Contacts</h2>
      <div className={css.div_contact}>
        <Filter />
        {isLoading && <b>Request in progress...</b>}
        <ContactsList />
      </div>
      <div className="div_calendar">
        <SimpleReactCalendar activeMonth={new Date()} />
      </div>
    </>
  );
}
