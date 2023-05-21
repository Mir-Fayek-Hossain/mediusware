
 

import { configureStore } from "@reduxjs/toolkit";
import { baseApiSlice } from "../app/api/baseApi";

export const store = configureStore({
  reducer: {
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApiSlice.middleware),
});
