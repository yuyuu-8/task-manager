import type { FC } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@admiral-ds/react-ui";
import { CustomTag } from "../../../shared/ui";
import { useTaskContext } from "../../../shared/context";
import type { Task } from "../../../shared/types/task";

const Card = styled.div`
  background: var(--admiral-color-Special_ElevatedBG, #ffffff);
  border-radius: 4px;
  box-shadow: var(
    --admiral-box-shadow-Shadow08,
    0px 3.2px 9px rgba(0, 0, 0, 0.12)
  );
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 400px;
  cursor: pointer;
  transition: transform 0.2s ease;
  height: 100%;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 0;
  min-height: 32px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: auto;
  padding-top: 8px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const Title = styled.h3`
  font-family: "VTB Group UI";
  font-size: 20px;
  font-weight: 550;
  line-height: 24px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--admiral-color-Neutral_Neutral90, #23262d);
  width: 100%;
`;

const Description = styled.p`
  font-family: "VTB Group UI";
  font-size: 16px;
  line-height: 20px;
  color: var(--admiral-color-Neutral_Neutral50, #717681);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const DateText = styled.span`
  font-family: "VTB Group UI";
  font-size: 14px;
  color: var(--admiral-color-Neutral_Neutral40, #8a96a8);
  margin-top: 8px;
`;

interface TaskItemProps {
  task: Task;
}

const getPriorityColor = (priority: Task["priority"]) => {
  switch (priority) {
    case "High":
      return "error";
    case "Medium":
      return "warning";
    case "Low":
      return "success";
  }
};

const getStatusColor = (status: Task["status"]) => {
  switch (status) {
    case "Done":
      return "success";
    case "In Progress":
      return "warning";
    case "To Do":
      return "error";
  }
};

const formatDate = (dateString?: string) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  return date.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const navigate = useNavigate();
  const { deleteTask } = useTaskContext();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/task/${task.id}`);
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this task?")) {
      setIsDeleting(true);
      try {
        await deleteTask(task.id);
      } catch (error) {
        console.error("Error deleting task:", error);
        alert("Failed to delete task. Please try again.");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const handleCardClick = () => {
    if (!isDeleting) {
      navigate(`/task/${task.id}`);
    }
  };

  return (
    <StyledCard onClick={handleCardClick}>
      <CardContent>
        <ContentContainer>
          <Title>{task.title}</Title>
          {task.description && <Description>{task.description}</Description>}
          {task.createdAt && (
            <DateText>Created: {formatDate(task.createdAt)}</DateText>
          )}
        </ContentContainer>
        <TagsContainer>
          <CustomTag variant="primary">{task.category}</CustomTag>
          <CustomTag variant={getStatusColor(task.status)}>
            {task.status}
          </CustomTag>
          <CustomTag variant={getPriorityColor(task.priority)}>
            {task.priority}
          </CustomTag>
        </TagsContainer>
        <ButtonContainer>
          <Button
            dimension="m"
            appearance="secondary"
            onClick={handleEdit}
            disabled={isDeleting}
          >
            Edit
          </Button>
          <Button
            dimension="m"
            appearance="primary"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </ButtonContainer>
      </CardContent>
    </StyledCard>
  );
};
