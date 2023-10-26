import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetResponseQuery } from "./types";

export const starwarsService = createApi({
  reducerPath: "swService",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.swapi.tech/api/" }),
  endpoints: (builder) => ({
    getAllData: builder.query<GetResponseQuery, string>({
      query: (data) => `${data}`,
    }),
  }),
});

export const { useGetAllDataQuery } = starwarsService;
