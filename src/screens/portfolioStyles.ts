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
      //   marginBottom: '40px',
    },
    menuItems: {
      display: 'flex',
      margin: '0 auto',
      width: '50%',
      marginTop: '-100px',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    menuItem: {
      padding: '8px 15px',
      background: '#EEEEEE',
      color: '#222222',
      border: 'none',
    },
    imageContainer: {
      width: '100%',
      marginTop: '30px',

      display: 'flex',
      //   position: 'relative',
    },
    imageStyle: {
      width: '25%',
    },
    contactUsContainer: {
      width: '70%',
      margin: '0 auto',

      marginTop: '-30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contactUsHeading: {
      color: '#222222',
      textTransform: 'uppercase',
      textAlign: 'center',
      padding: '60px 0',
      lineHeight: '35px',
      fontWeight: 400,
      fontFamily: `"Montserrat", "sans-serrif`,
    },
    buttonContainer: {
      marginLeft: '30px',
      background: '#222222',
      color: '#fff',
      fontSize: '16px',
      padding: '10px 20px 10px 20px',
    },
  })
);
