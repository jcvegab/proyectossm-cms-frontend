import { FC } from 'react';

import styled from '@emotion/styled';
import { TextField } from '@mui/material';

interface Props {
  type?: 'text' | 'password';
  variant?: 'filled' | 'outlined' | 'standard';
  label: string;
  placeholder?: string;
}

const StyledInput = styled.div(
  ({ theme }) => `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  span {
    font-weight: 500;
    color: ${theme.palette.primary.main};
  }
`,
);

const InputForm: FC<Props> = (props: Props) => {
  const { type = 'text', label, placeholder, variant = 'outlined' } = props;
  return (
    <StyledInput>
      <span>{label}</span>
      <TextField
        type={type}
        placeholder={placeholder}
        variant={variant}
        hiddenLabel
        fullWidth
      />
    </StyledInput>
  );
};

export default InputForm;
