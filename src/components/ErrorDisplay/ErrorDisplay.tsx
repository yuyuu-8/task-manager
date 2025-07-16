import type { FC } from "react";
import { T, Button } from "@admiral-ds/react-ui";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 40px;
  background-color: #ffebee;
  border: 1px solid #ef5350;
  border-radius: 8px;
  margin: 20px 0;
`;

interface ErrorDisplayProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorDisplay: FC<ErrorDisplayProps> = ({ message, onRetry }) => {
  return (
    <ErrorContainer>
      <T font="Body/Body 1 Long">⚠️ {message}</T>
      {onRetry && <Button onClick={onRetry}>Try again</Button>}
    </ErrorContainer>
  );
};
