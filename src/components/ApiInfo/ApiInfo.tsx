import type { FC } from "react";
import styled from "styled-components";
import { T } from "@admiral-ds/react-ui";

const ApiInfoContainer = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  background: var(--admiral-color-Special_ElevatedBG, #ffffff);
  border: 1px solid var(--admiral-color-Neutral_Neutral20, #e1e5e9);
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: var(
    --admiral-box-shadow-Shadow08,
    0px 3.2px 9px rgba(0, 0, 0, 0.12)
  );
  max-width: 300px;
  z-index: 1000;

  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    right: auto;
    margin: 16px;
    max-width: none;
  }
`;

const StatusDot = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#4CAF50" : "#F44336")};
  display: inline-block;
  margin-right: 8px;
`;

const ApiRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ApiInfo: FC = () => {
  return (
    <ApiInfoContainer>
      <ApiRow>
        <StatusDot active={true} />
        <T font="Caption/Caption 1">API: Supabase</T>
      </ApiRow>
      <T font="Caption/Caption 2">Real PostgreSQL database</T>
    </ApiInfoContainer>
  );
};
