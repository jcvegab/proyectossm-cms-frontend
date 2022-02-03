import React, { FC } from 'react';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaUserCircle,
  FaYoutube,
} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import {
  RiMailLine,
  RiMailOpenLine,
  RiHome3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiShoppingCart2Line,
  RiHeartLine,
  RiHeartFill,
  RiSearchLine,
  RiUploadLine,
} from 'react-icons/ri';

export type IconListType = keyof typeof IconList;

interface Props extends IconButtonProps {
  icon: IconListType;
  fill?: string;
  stroke?: string;
  iconsize?: number;
}

const IconList = {
  home: RiHome3Line,
  profile: FaUserCircle,
  down: RiArrowDownSLine,
  up: RiArrowUpSLine,
  back: RiArrowLeftSLine,
  forward: RiArrowRightSLine,
  email: RiMailLine,
  emailOpen: RiMailOpenLine,
  google: FcGoogle,
  facebookSquare: FaFacebookSquare,
  facebook: FaFacebook,
  messenger: FaFacebookMessenger,
  instagram: FaInstagram,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  cart: RiShoppingCart2Line,
  heartLine: RiHeartLine,
  heartFill: RiHeartFill,
  search: RiSearchLine,
  upload: RiUploadLine,
};

const StyledIconButton: FC<Props> = (props: Props) => {
  const theme = useTheme();
  const { fill, icon, stroke, iconsize, ...otherProps } = props;
  const selectedIcon = IconList[icon] || IconList.home;

  const StyledIcon = styled(selectedIcon)`
    fill: ${fill || theme.palette.primary.main};
    stroke: ${stroke || 'none'};
    font-size: ${iconsize || 24}px;
    width: auto;
    min-width: fit-content;
  `;

  return (
    <IconButton {...otherProps}>
      <StyledIcon />
    </IconButton>
  );
};

export default StyledIconButton;
