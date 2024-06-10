import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3300'}),
  tagTypes: ['Note','Note'],
  endpoints: builder => ({})
})