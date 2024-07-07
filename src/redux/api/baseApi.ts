import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; //! Have to take from react

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/vi" }),
  endpoints: () => ({}),
});
