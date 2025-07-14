import type { FC, ReactNode } from "react";
import styled from "styled-components";

interface CustomTagProps {
  children: ReactNode;
  variant?: "primary" | "success" | "warning" | "error";
}

const TagContainer = styled.div<{ variant?: string }>`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `
          background-color: var(--admiral-color-Primary_Primary60, #0062FF);
          color: var(--admiral-color-Special_StaticWhite, #FFFFFF);
        `;
      case "success":
        return `
          background-color: var(--admiral-color-Success_Success60, #22C38E);
          color: var(--admiral-color-Special_StaticWhite, #FFFFFF);
        `;
      case "warning":
        return `
          background-color: var(--admiral-color-Warning_Warning60, #F2A000);
          color: var(--admiral-color-Special_StaticWhite, #FFFFFF);
        `;
      case "error":
        return `
          background-color: var(--admiral-color-Error_Error60, #D92020);
          color: var(--admiral-color-Special_StaticWhite, #FFFFFF);
        `;
      default:
        return `
          background-color: var(--admiral-color-Neutral_Neutral10, #E5E7EB);
          color: var(--admiral-color-Neutral_Neutral90, #23262D);
        `;
    }
  }}
`;

export const CustomTag: FC<CustomTagProps> = ({
  children,
  variant = "default",
}) => {
  return <TagContainer variant={variant}>{children}</TagContainer>;
};
