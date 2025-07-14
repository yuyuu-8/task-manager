import type { FC } from "react";
import { Select } from "@admiral-ds/react-ui";
import styled from "styled-components";

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 14px;
  color: var(--admiral-color-Neutral_Neutral50, #717681);
`;

interface FilterSelectProps {
  label: string;
  value: string;
  options: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
}

export const FilterSelect: FC<FilterSelectProps> = ({
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <SelectWrapper>
      <Label>{label}</Label>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        dimension="m"
        style={{ width: "200px" }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </SelectWrapper>
  );
};
