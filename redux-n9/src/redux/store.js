//==============BEFORE UPDATE=======================

// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

//==============AFTER UPDATE=======================

import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./reducer";

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
// });


import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});