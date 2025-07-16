import type { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { T } from "@admiral-ds/react-ui";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  background-color: var(--admiral-color-Primary_Primary60, #0062ff);
  color: var(--admiral-color-Special_StaticWhite, #ffffff);

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <T font="Main/XL">Task Manager</T>
        </Logo>
      </HeaderContent>
    </HeaderContainer>
  );
};
