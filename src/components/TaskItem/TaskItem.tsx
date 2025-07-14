import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Card, T, Tag, Button } from '@admiral-ds/react-ui';
import { EditOutline } from '@admiral-ds/icons';
import { Task } from '../../types/task';

const StyledCard = styled(Card)`
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CardContent = styled.div`
  padding: 16px;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

interface TaskItemProps {
  task: Task;
}

const getPriorityColor = (priority: Task['priority']) => {
  switch (priority) {
    case 'High':
      return 'error';
    case 'Medium':
      return 'warning';
    case 'Low':
      return 'success';
  }
};

const getStatusColor = (status: Task['status']) => {
  switch (status) {
    case 'Done':
      return 'success';
    case 'In Progress':
      return 'warning';
    case 'To Do':
      return 'error';
  }
};

export const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const navigate = useNavigate();

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/task/${task.id}`);
  };

  const handleCardClick = () => {
    navigate(`/task/${task.id}`);
  };

  return (
    <StyledCard onClick={handleCardClick}>
      <CardContent>
        <T font="Main/L" as="h3">
          {task.title}
        </T>
        {task.description && (
          <T font="Main/M" as="p" style={{ marginTop: 8, color: 'var(--admiral-color-Neutral_Neutral50, #717681)' }}>
            {task.description}
          </T>
        )}
        <TagsContainer>
          <Tag appearance="filled" dimension="m">
            {task.category}
          </Tag>
          <Tag appearance={getStatusColor(task.status)} dimension="m">
            {task.status}
          </Tag>
          <Tag appearance={getPriorityColor(task.priority)} dimension="m">
            {task.priority}
          </Tag>
        </TagsContainer>
        <ButtonContainer>
          <Button dimension="m" appearance="secondary" onClick={handleEdit}>
            <EditOutline width={24} height={24} />
            Edit
          </Button>
        </ButtonContainer>
      </CardContent>
    </StyledCard>
  );
};
