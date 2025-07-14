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
`;

const PageTitle = styled(T)`
  margin-bottom: 24px;
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
