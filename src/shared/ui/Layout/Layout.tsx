import type { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { T } from "@admiral-ds/react-ui";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 24px;
  background-color: var(--admiral-color-Background_Secondary, #ffffff);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const PageTitle = styled(T)`
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
    font-size: 24px;
  }

  @media (max-width: 480px) {
    margin-bottom: 12px;
    font-size: 20px;
  }
`;

export interface LayoutProps extends PropsWithChildren {
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        {title && (
          <PageTitle font="Main/XXL" as="h1">
            {title}
          </PageTitle>
        )}
        {children}
      </Main>
    </LayoutContainer>
  );
};
