import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const TaskDetailsPage: FC = () => {
  const { id } = useParams();

  return (
    <Layout title="Task Details">
      <div>Task details for ID: {id} will be implemented soon</div>
    </Layout>
  );
};
