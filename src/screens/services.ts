import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export default makeStyles((theme: Theme) =>
  createStyles({
    serviceContainer: {
      width: '85%',
      margin: '0 auto',
      padding: '100px 20px',
    },
    sectionTitle: {
      textAlign: 'center',
      width: '55%',
      margin: '0 auto',
      marginBottom: '60px',
      '& h1': {
        fontSize: '36px',
        letterSpacing: '3px',
        color: '#222222',
        textTransform: 'uppercase',
        marginBottom: '15px',
      },
    },
    border: {
      background: 'none repeat scroll 0 0 #999999',
      display: 'block',
      height: '2px',
      margin: '0 auto',
      width: '100px',
      marginBottom: '40px',
    },

    serviceParaContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '15px 0px',
    },

    serviceTextHeadingLeft: {
      textTransform: 'uppercase',
      color: '#222222',
      margin: '5px 0',
      fontWeight: '400',
      fontFamily: 'Montserrat, sans-serif',
      textAlign: 'right',
    },

    serviceTextHeadingRight: {
      textTransform: 'uppercase',
      color: '#222222',
      margin: '5px 0',
      fontWeight: '400',
      fontFamily: 'Montserrat, sans-serif',
      textAlign: 'left',
    },

    serviceParaTextRight: {
      textAlign: 'left',
      color: '#999999',
      fontSize: '14px',
      fontFamily: 'Open sans, sans-serif',
      marginTop: '0px',
    },

    outerContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        flexWrap: 'wrap',
      },
    },
    leftInnerContainer: {
      marginBottom: '20px',
      marginRight: '4%',
      position: 'relative',
      width: '45%',
      display: 'flex',
      flexDirection: 'column',
    },
  })
);
