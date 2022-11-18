import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', '697866a92fmshe1dfb1b4c77a106p109defjsn010eedb01256\n')
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongDetails: builder.query({ query: (songid) => `/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: (songid) => `/tracks/related?track_id=${songid}` }),
    getArtistDetails: builder.query({ query: (artistid) => `/artists/details?artist_id=${artistid}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getTopArtists: builder.query({ query: () => '/charts/world' }),
    getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
  }),
});

export const {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetTopChartsQuery,
  useGetTopArtistsQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;