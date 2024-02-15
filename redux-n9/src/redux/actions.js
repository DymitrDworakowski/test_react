// import { nanoid } from "nanoid";
//==============BEFORE UPDATE=======================
// export const addContact = ({ name, number }) => {
//   return {
//     type: "contacts/addContact",
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };

// export const deleteContact = (contactId) => {
//   return {
//     type: "contacts/deleteContact",
//     payload: contactId,
//   };
// };

// export const findContact = (value) => {
//   return {
//     type: "contacts/findContact",
//     payload: value,
//   };
// };

//==============AFTER UPDATE=======================

// import { createAction } from "@reduxjs/toolkit";

// export const addContact = createAction("contacts/addContact",(name,number) => {
//   return{
//     payload: {
//       id:nanoid(),
//       name,
//       number,
//     }
//   }
// });

// export const deleteContact = createAction("contacts/deleteContact");
// export const findContact = createAction("contacts/findContact");
