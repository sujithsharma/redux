import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jsoneditoronline.org/v2/docs/374c4554da37417caba23ff501296569' }),
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: () => 'data', 
    }),
    updateData: builder.mutation({
      query: (updatedData) => ({
        url: 'data', 
        method: 'PUT',
        body: updatedData, 
      }),
    }),
  }),
});

export const { useFetchDataQuery, useUpdateDataMutation } = api;
