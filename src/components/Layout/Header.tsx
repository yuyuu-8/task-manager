import type { FC } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { T } from "@admiral-ds/react-ui";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  background-color: var(--admiral-color-Primary_Primary60, #0062ff);
  color: var(--admiral-color-Special_StaticWhite, #ffffff);
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-right: 48px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  text-decoration: none;
  color: inherit;
  opacity: ${({ $active }) => ($active ? 1 : 0.7)};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export const Header: FC = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Logo to="/">
        <T font="Main/XL">Task Manager</T>
      </Logo>
      <Nav>
        <NavLink to="/" $active={location.pathname === "/"}>
          <T font="Main/M">Tasks</T>
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};
