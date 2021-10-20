import React from 'react';
//components
import { JobCard } from 'components/JobCard/JobCard';
//hooks
import { useGetJobsQuery } from '../../store/jobs';
//styles
import { Wrapper } from './JobList.styles';

interface Props {
  search: string;
}

function JobsList({ search }: Props) {
  const { data, isLoading, isError, error } = useGetJobsQuery(search);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) {
    console.log(error);
    return <h1>Something went wrong. Please refresh the page.</h1>;
  }
  return (
    <Wrapper>
      <ul>
        {data?.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </ul>
    </Wrapper>
  );
}

export { JobsList };
