import { FC } from 'react';

import styled from '@emotion/styled';
import Fab, { FabProps } from '@mui/material/Fab';
import { MdOutlineArrowBackIosNew as ArrowLeft } from 'react-icons/md';

interface Props extends FabProps {
  extended?: boolean;
}

const StyledFloatButton = styled(Fab)(
  ({ theme }) => `
  position: fixed;
  top:30px;
	left:30px;
  color: white;
  gap: 8px;
  background-color: ${theme.palette.primary.main};
  &:hover {
    background-color: ${theme.button.type.primary.hoverBgColor};
  }
`,
);

const FloatButton: FC<Props> = (props: Props) => {
  const { extended = false, children, ...otherProps } = props;
  return (
    <StyledFloatButton
      variant={extended ? 'extended' : 'circular'}
      {...otherProps}
    >
      <ArrowLeft />
      {children}
    </StyledFloatButton>
  );
};

export default FloatButton;
