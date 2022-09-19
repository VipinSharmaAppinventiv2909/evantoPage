import { makeStyles, createStyles } from '@mui/styles';

export default makeStyles(() =>
  createStyles({
    container: {
      width: '80%',
      //   marginLeft: '15%',
      //   marginRight: '15%',
      margin: '0 auto',
      padding: '100px 20px',
    },
    serviceContainer: {
      width: '85%',
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
    avatarContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    imageContainer: {
      width: '28%',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    serviceParaContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      //   alignItems: 'center',
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
  })
);