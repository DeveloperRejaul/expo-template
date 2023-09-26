import { api } from '../api';

export const usrApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (body) => {},
    }),
  }),
});

export const { useUserLoginMutation } = usrApi;
