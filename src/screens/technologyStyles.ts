import { makeStyles, createStyles } from '@mui/styles';

export default makeStyles(() =>
  createStyles({
    container: {
      width: '80%',
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
    templateContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      '& h5': {
        color: '#222222',
        fontSize: '14px',
        fontFamily: 'Montserrat, sans-serif',
      },
    },

    textContent: {
      fontSize: '14px',
      color: '#999999',
      marginTop: '20px',
      textAlign: 'center',
      width: '90%',
      margin: '0 auto',
    },
  })
);
