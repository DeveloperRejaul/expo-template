import { api } from '../api';

export const demoApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    demoReq: builder.mutation({
      query: (body) => {},
    }),
  }),
});

export const { useDemoReqMutation } = demoApi;
