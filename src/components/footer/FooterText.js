/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import { TextDecrypt } from '../content/TextDecrypt';
import Resume from '../../settings/resume.json';
import {
  HeartIcon,
  HeartIconFilled,
  SponsorButton,
} from '../content/SponsorButton';

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'absolute',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

export const FooterText = () => {
  const classes = useStyles();

  return (
    <Link
      color='inherit'
      underline='none'
      href='https://github.com/pixdevgithub/pixdev.gq'
      target='_blank'
      rel='noopener noreferrer'
      className={classes.footerText}
    >
      <Typography variant='body1'>
        <TextDecrypt text={'Made With'} />
      </Typography>

      <HeartIcon />

      <Typography variant='body1'>
        <TextDecrypt text={'‏‏‎ ‎By pixelDev'} />
      </Typography>
    </Link>
  );
};
