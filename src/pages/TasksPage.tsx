import { FC } from 'react';
import { Layout } from '../components/Layout';
import { TaskList } from '../components/TaskList';

// Временные тестовые данные
const mockTasks = [
  {
    id: '1',
    title: 'Implement authentication',
    description: 'Add user authentication using JWT tokens',
    category: 'Feature',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: '2',
    title: 'Fix navigation bug',
    description: 'Menu items not highlighting correctly',
    category: 'Bug',
    status: 'To Do',
    priority: 'Medium',
  },
  {
    id: '3',
    title: 'Update documentation',
    description: 'Add API endpoints documentation',
    category: 'Documentation',
    status: 'Done',
    priority: 'Low',
  },
] as const;

export const TasksPage: FC = () => {
  return (
    <Layout title="Tasks">
      <TaskList tasks={mockTasks} />
    </Layout>
  );
};
