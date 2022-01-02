import React, { FC, MouseEvent, ReactNode } from 'react';

// import styled from '@emotion/styled';

interface Props {
  children: ReactNode | ReactNode[];
  type?: string;
  size?: 'large' | 'middle' | 'small';
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

// const StyledButton = styled(ButtonUI)`
//   padding: 0 ${BtnSize.padding}px;
//   font-family: Montserrat;
//   font-size: ${BtnSize.fontSize}px;
//   line-height: ${BtnSize.lineHeight}px;
//   background-color: ${BtnType.bgColor};
//   border: 1px solid ${BtnType.border};
//   color: ${BtnType.color};
//   border-radius: 4px;
//   cursor: pointer;
//   transition: 0.3s;
//   user-select: none;
//   &:hover {
//     ${BtnType === buttonType.ghost
//       ? 'background-color: rgba(27, 61, 94, 0.082);'
//       : 'background-color: rgb(27, 61, 94, 0.85)'}
//   }
//   &:focus {
//     outline: none;
//   }
// `;

const Card: FC<Props> = (props: Props) => {
  const {
    // children,
    // type = 'primary',
    // size = 'middle',
    // disabled = false,
  } = props;
  // const { onClick } = props;
  return (
    // <StyledButton
    //   type={type}
    //   size={size}
    //   disabled={disabled}
    //   onClick={onClick}
    // >
    //   {children}
    // </StyledButton>);
    <></>
  );
};

export default Card;
