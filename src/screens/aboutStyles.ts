import { autocompleteClasses } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

export default makeStyles(() =>
  createStyles({
    navbarInner: {
      minHeight: '45px',
      lineHeight: '20px !important',
      borderBottom: 'none !important',
      paddingLeft: '20px !important',
      paddingRight: '20px !important',
      background: '#fff',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1) !important',
      zIndex: 10,
    },
    navbarSpans: {
      fontFamily: 'Montserrat, sans-serif',
      textTransform: 'uppercase',
      fontWeight: 400,
      color: '#999999',
      height: '100%',
      lineHeight: '25px',
      textShadow: 'none',
      marginTop: '10px',
    },
    newWave: {
      position: 'relative',
      backgroundColor: '#f5f5f5',
      zIndex: 1,
    },
    container: {
      width: '80%',
      //   marginLeft: '15%',
      //   marginRight: '15%',
      margin: '0 auto',
      padding: '100px 20px',
    },
    sectionTitle: {
      textAlign: 'center',
      width: '55%',
      margin: '0 auto',
      marginBottom: '60px',
      //   letterSpacing: '1.5',
      //   color: '#999999',
      //   opacity: '0.9',
      //   fontWeight: 'light',
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
    screens: {
      position: 'relative',
    },
    smallScreenLeft: {
      width: '150px',
      height: 'auto',
      position: 'absolute',
      //   left: 0,
      //   top: '120px',
      zIndex: 0,
    },
    smallScreenRight: {
      width: '150px',
      height: 'auto',
      position: 'absolute',
      right: '350px',
      //   top: '120px',
      zIndex: 0,
    },
    bigScreen: {
      width: '600px',
      height: 'auto',
      margin: '0 auto',
      zIndex: 100,
    },
    elementFromRight: {
      paddingLeft: '0px',
      position: 'relative',
    },
    elementFromLeft: {
      paddingRight: '0px',
      position: 'relative',
    },
    elementFadeIn: {
      position: 'relative',
      paddingLeft: '0px',
    },
    oneHalfFirst: {
      float: 'left',
      marginBottom: '20px',
      marginRight: '4%',
      position: 'relative',
      width: '48%',
      display: 'flex',
      flexDirection: 'column',
    },
    oneLastHalf: {
      float: 'left',
      marginBottom: '20px',
      position: 'relative',
      width: '48%',
      display: 'flex',
      flexDirection: 'column',
    },
  })
);
