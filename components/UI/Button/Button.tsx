import styled from '@emotion/styled';
import ButtonUI from '@mui/material/Button';

interface Props {
  kind?: 'primary' | 'secondary' | 'ghost';
  size?: 'large' | 'medium' | 'small';
}

const Button = styled(ButtonUI)<Props>(
  ({ kind = 'primary', size = 'medium', theme }) => `
  padding: 0 ${theme.button.size[size].padding}px;
  font-family: Montserrat;
  font-size: ${theme.button.size[size].fontSize}px;
  line-height: ${theme.button.size[size].lineHeight}px;
  background-color: ${theme.button.type[kind].bgColor};
  border: 1px solid ${theme.button.type[kind].borderColor};
  color: ${theme.button.type[kind].color};
  text-transform: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
  user-select: none;
  &:hover {
    background-color: ${theme.button.type[kind].hoverBgColor};
  }
  &:focus {
    outline: none;
  }
`,
);

export default Button;
