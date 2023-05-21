import { baseApiSlice } from "../app/api/baseApi";

export const contactsApi = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => `/contacts/?page=1&page_size=10`,
    }),
    getUSContacts: builder.query({
        query: () => `/country-contacts/United%20States/?page=1&page_size=10`,
      }),
  }),
});

export const {useGetAllContactsQuery,useGetUSContactsQuery}=contactsApi