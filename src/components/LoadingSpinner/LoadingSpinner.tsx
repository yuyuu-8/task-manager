import type { FC } from "react";
import { Spinner, T } from "@admiral-ds/react-ui";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 40px;
  min-height: 200px;
`;

export const LoadingSpinner: FC = () => {
  return (
    <LoadingContainer>
      <Spinner />
      <T font="Body/Body 1 Long">Loading tasks...</T>
    </LoadingContainer>
  );
};
