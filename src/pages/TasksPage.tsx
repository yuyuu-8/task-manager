import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@admiral-ds/react-ui";
import { Layout } from "../components/Layout";
import { TaskList } from "../components/TaskList";
import { useTaskContext } from "../context";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-family: "VTB Group UI";
  font-size: 32px;
  font-weight: 550;
  color: var(--admiral-color-Neutral_Neutral90, #23262d);
`;

export const TasksPage: FC = () => {
  const { tasks } = useTaskContext();
  const navigate = useNavigate();

  const handleAddTask = () => {
    navigate("/task/new");
  };

  return (
    <Layout>
      <HeaderContainer>
        <Title>Tasks</Title>
        <Button dimension="m" onClick={handleAddTask}>
          Add Task
        </Button>
      </HeaderContainer>
      <TaskList tasks={tasks} />
    </Layout>
  );
};
