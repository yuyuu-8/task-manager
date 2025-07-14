import type { FC } from "react";
import { Layout } from "../components/Layout";
import { TaskList } from "../components/TaskList";
import { useTaskContext } from "../context";

export const TasksPage: FC = () => {
  const { tasks } = useTaskContext();

  return (
    <Layout title="Tasks">
      <TaskList tasks={tasks} />
    </Layout>
  );
};
