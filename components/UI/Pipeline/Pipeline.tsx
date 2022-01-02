import styled from '@emotion/styled';

interface Props {
  color?: 'base' | 'dark';
}

const Pipeline = styled.div<Props>(
  ({ color = 'base' }) => `
  border-right: 1px solid ${color ? '#d9d9d9' : ''};
  height: 44px;
`,
);

export default Pipeline;
