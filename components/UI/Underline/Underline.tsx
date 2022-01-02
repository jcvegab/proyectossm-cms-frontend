import styled from '@emotion/styled';

interface Props {
  color?: 'base' | 'dark';
}

const Underline = styled.div<Props>(
  ({ color = 'base' }) => `
  border-top: 2px solid ${color ? 'rgb(27, 61, 94)' : ''};
  width: 100%;
`,
);

export default Underline;
