import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../pages/Contacts.module.css";
import Calendar from 'react-calendar';
import { Helmet } from "react-helmet";
import ContactsList from "../components/ContactList/ContactsList";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";

import 'react-calendar/dist/Calendar.css';



import { fetchContacts } from "../redux/contacts/operations";
import { selectIsLoading } from "../redux/selectors";
import Loader from "../components/Loader/Loader";

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch,]);

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
        {isLoading &&  <Loader/>}
        <ContactsList />
      </div>
      <div className="div_calendar">
        <Calendar />
      </div>
    </>
  );
}


// import { useState } from 'react';
// import Calendar from 'react-calendar';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

// function MyApp() {
//   const [value, onChange] = useState<Value>(new Date());

//   return (
//     <div>
//       <Calendar onChange={onChange} value={value} />
//     </div>
//   );
// }