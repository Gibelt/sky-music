import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const trackApi = createApi({
  reducerPath: 'trackApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online/catalog/track',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'all/',
    }),
    getTrackById: builder.query({
      query: ({trackId}) => `${trackId}/`
    }),
    addTrackInFavorite: builder.mutation({
      query: ({ id }) => ({
        url: `${id}/favorite`,
        method: 'POST',
        prepareHeaders: (headers, { getState }) => {
          const token = getState().user.access;
          if (token) {
            headers.set('authorization', token);
          }
          return headers;
        },
      }),
    }),
  }),
});

export const { useGetAllTracksQuery, useGetTrackByIdQuery, useAddTrackInFavoriteMutation } = trackApi;
