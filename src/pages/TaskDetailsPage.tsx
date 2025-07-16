import { useState, useEffect } from "react";
import type { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { TextField, T } from "@admiral-ds/react-ui";
import { Button } from "@admiral-ds/react-ui";
import { Layout } from "../components/Layout";
import { FilterSelect } from "../components/FilterSelect";
import { useTaskContext } from "../context";
import type { Task } from "../types/task";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  background: var(--admiral-color-Special_ElevatedBG, #ffffff);
  border-radius: 8px;
  box-shadow: var(
    --admiral-box-shadow-Shadow08,
    0px 3.2px 9px rgba(0, 0, 0, 0.12)
  );

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 24px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const Field = styled.div`
  margin-bottom: 24px;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const ErrorMessage = styled(T)`
  color: var(--admiral-color-Error_Error60, #d92020);
`;

const statusOptions = [
  { value: "To Do", label: "To do" },
  { value: "In Progress", label: "In progress" },
  { value: "Done", label: "Done" },
];

const categoryOptions = [
  { value: "Bug", label: "Bug" },
  { value: "Feature", label: "Feature" },
  { value: "Documentation", label: "Documentation" },
  { value: "Refactor", label: "Refactor" },
  { value: "Test", label: "Test" },
];

const priorityOptions = [
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
];

export const TaskDetailsPage: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTask, updateTask, createTask } = useTaskContext();
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const isNewTask = !id;

  const [formData, setFormData] = useState<Task>({
    id: "",
    title: "",
    description: "",
    category: "Feature",
    status: "To Do",
    priority: "Medium",
  });

  useEffect(() => {
    if (id) {
      const task = getTask(id);
      if (task) {
        setFormData(task);
      } else {
        setError("Task not found");
      }
    } else {
      setFormData({
        id: "",
        title: "",
        description: "",
        category: "Feature",
        status: "To Do",
        priority: "Medium",
      });
    }
  }, [id, getTask]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.title.trim()) {
      setError("Title is required");
      return;
    }

    setIsSubmitting(true);
    try {
      if (isNewTask) {
        await createTask({
          title: formData.title,
          description: formData.description,
          category: formData.category,
          status: formData.status,
          priority: formData.priority,
        });
      } else {
        await updateTask(formData);
      }
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout title={isNewTask ? "New task" : "Edit task"}>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Field>
            <TextField
              dimension="m"
              label="Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
              style={{ width: "100%" }}
              disabled={isSubmitting}
            />
          </Field>

          <Field>
            <TextField
              dimension="m"
              label="Description"
              value={formData.description || ""}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              style={{ width: "100%" }}
              rows={3}
              disabled={isSubmitting}
            />
          </Field>

          <Field>
            <FilterSelect
              label="Category"
              value={formData.category}
              options={categoryOptions}
              onChange={(value) =>
                setFormData({
                  ...formData,
                  category: value as Task["category"],
                })
              }
            />
          </Field>

          <Field>
            <FilterSelect
              label="Status"
              value={formData.status}
              options={statusOptions}
              onChange={(value) =>
                setFormData({ ...formData, status: value as Task["status"] })
              }
            />
          </Field>

          <Field>
            <FilterSelect
              label="Priority"
              value={formData.priority}
              options={priorityOptions}
              onChange={(value) =>
                setFormData({
                  ...formData,
                  priority: value as Task["priority"],
                })
              }
            />
          </Field>

          {error && (
            <ErrorMessage font="Main/M" as="p">
              {error}
            </ErrorMessage>
          )}

          <ButtonGroup>
            <Button
              dimension="m"
              appearance="secondary"
              type="button"
              onClick={() => navigate("/")}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button dimension="m" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : isNewTask ? "Create" : "Save"}
            </Button>
          </ButtonGroup>
        </form>
      </FormContainer>
    </Layout>
  );
};
