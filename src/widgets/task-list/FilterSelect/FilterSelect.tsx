import type { FC } from "react";
import styled from "styled-components";

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 200px;
`;

const Label = styled.label`
  font-size: 14px;
  color: var(--admiral-color-Neutral_Neutral50, #717681);
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid var(--admiral-color-Neutral_Neutral40, #8a96a8);
  border-radius: 4px;
  background-color: var(--admiral-color-Special_ElevatedBG, #ffffff);
  color: var(--admiral-color-Neutral_Neutral90, #23262d);
  cursor: pointer;
  outline: none;

  &:hover {
    border-color: var(--admiral-color-Primary_Primary60, #0062ff);
  }

  &:focus {
    border-color: var(--admiral-color-Primary_Primary60, #0062ff);
    box-shadow: 0 0 0 1px var(--admiral-color-Primary_Primary60, #0062ff);
  }

  option {
    padding: 8px 12px;
    font-size: 14px;
  }
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
      <StyledSelect value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};
