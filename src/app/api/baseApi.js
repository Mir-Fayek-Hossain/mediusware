import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react"
  

  
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://contact.mediusware.com/api/",
  })
  
  
  export const baseApiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: (builder) => ({}),
   
  })
  