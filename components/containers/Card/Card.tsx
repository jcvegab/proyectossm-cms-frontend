import React, { FC } from 'react';

import styled from '@emotion/styled';
import { Card as MuiCard, CardMedia } from '@mui/material';

import Button from '@components/UI/Button';
import { Body2, BtnText } from '@components/UI/Text';

interface Props {
  img_alt: string;
  img_src: string;
  title: string;
  body: string;
  share?: boolean;
}

const StyledCard = styled(MuiCard)(
  ({ theme }) => `
  border-radius: 8px;
  box-shadow: 8px 8px 16px 0px rgba(0 0 0 /15%);
  .content__card{
    padding: 5%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .info__card {
    span {
      color: ${theme.font.color.blue};
      font-family: ${theme.font.typography.body};
      font-weight: bold;
      font-size: 21px;
      line-height: 28px;
    }
    ${Body2} {
      max-height: 150px;
    }
  }
  .buttons__card {
    display: flex;
    justify-content: space-between;
    ${BtnText} {
    color: ${theme.font.color.white};
    }
  }
`,
);

const Card: FC<Props> = (props: Props) => {
  const { img_alt, img_src, title, body, share = false } = props;
  return (
    <StyledCard>
      <CardMedia component='img' alt={img_alt} height='140' image={img_src} />
      <div className='content__card'>
        <div className='info__card'>
          <span>{title}</span>
          <Body2>{body}</Body2>
        </div>
        <div className='buttons__card'>
          <Button size='small'>
            <BtnText>Más información</BtnText>
          </Button>
          {share && (
            <Button size='small'>
              <BtnText>Comparte</BtnText>
            </Button>
          )}
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
