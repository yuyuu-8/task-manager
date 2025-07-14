import { FC, useState } from 'react';
import styled from 'styled-components';
import { Select, SelectOption, T } from '@admiral-ds/react-ui';
import { Task, TaskStatus, TaskCategory, TaskPriority } from '../../types/task';
import { TaskItem } from '../TaskItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const TasksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const NoTasks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
  background: var(--admiral-color-Special_ElevatedBG, #FFFFFF);
  border-radius: 4px;
`;

interface TaskListProps {
  tasks: Task[];
}

const statusOptions: SelectOption[] = [
  { value: '', label: 'All Statuses' },
  { value: 'To Do', label: 'To Do' },
  { value: 'In Progress', label: 'In Progress' },
  { value: 'Done', label: 'Done' },
];

const categoryOptions: SelectOption[] = [
  { value: '', label: 'All Categories' },
  { value: 'Bug', label: 'Bug' },
  { value: 'Feature', label: 'Feature' },
  { value: 'Documentation', label: 'Documentation' },
  { value: 'Refactor', label: 'Refactor' },
  { value: 'Test', label: 'Test' },
];

const priorityOptions: SelectOption[] = [
  { value: '', label: 'All Priorities' },
  { value: 'High', label: 'High' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Low', label: 'Low' },
];

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
  const [statusFilter, setStatusFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = !statusFilter || task.status === statusFilter;
    const matchesCategory = !categoryFilter || task.category === categoryFilter;
    const matchesPriority = !priorityFilter || task.priority === priorityFilter;
    return matchesStatus && matchesCategory && matchesPriority;
  });

  return (
    <Container>
      <FiltersContainer>
        <Select
          mode="select"
          label="Status"
          value={statusFilter}
          options={statusOptions}
          onChange={(value) => setStatusFilter(value as TaskStatus)}
          dimension="m"
          style={{ width: '200px' }}
        />
        <Select
          mode="select"
          label="Category"
          value={categoryFilter}
          options={categoryOptions}
          onChange={(value) => setCategoryFilter(value as TaskCategory)}
          dimension="m"
          style={{ width: '200px' }}
        />
        <Select
          mode="select"
          label="Priority"
          value={priorityFilter}
          options={priorityOptions}
          onChange={(value) => setPriorityFilter(value as TaskPriority)}
          dimension="m"
          style={{ width: '200px' }}
        />
      </FiltersContainer>

      {filteredTasks.length > 0 ? (
        <TasksGrid>
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </TasksGrid>
      ) : (
        <NoTasks>
          <T font="Main/L" as="p">
            No tasks found
          </T>
        </NoTasks>
      )}
    </Container>
  );
};
