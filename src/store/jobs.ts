import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Filters {
  search: string;
  isFullTime: boolean;
  location: string;
}

export interface Job {
  id: number;
  type: string;
  title: string;
  company: string;
  companyLogo?: string | null;
  createdAt: string;
  location: string;
}

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/jobs/' }),
  endpoints: (builder) => ({
    getJobs: builder.query<Job[], Filters>({
      query: (filters) => {
        let link = '';
        if (filters.search.length) {
          link += `?search=${filters.search}&`;
        } else {
          link += '/all?';
        }
        if (filters.location) {
          link += `location=${filters.location}&`;
        }
        if (filters.isFullTime) link += 'fulltime=true';
        return link;
      },
    }),
    getOneJob: builder.query<Job, string>({
      query: (id) => `job/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetJobsQuery, useGetOneJobQuery } = jobsApi;
