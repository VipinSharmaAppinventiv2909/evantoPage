import { makeStyles, createStyles } from '@mui/styles';

export default makeStyles(() =>
  createStyles({
    mainContainer: {
      height: '65vh',
      width: '100vw',
    },
    container: {
      backgroundImage: 'url(/separator3.jpg)',
      backgroundPosition: '50% 0px',
      textAlign: 'center',
      bavkgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttchment: 'fixed',
      width: '100%',
      height: '100%',
    },
    innerContainer: {
      background: '#000000',
      opacity: 0.8,
      height: '100%',
    },
    imageContainer: {
      width: '70px',
      height: '70px',
      marginBottom: '40px',
      marginTop: '60px',
    },
    numberContainer: {
      color: '#ffffff',
      //   fontSize: '48px',
      //   width: '70%',
      fontFamily: `"Montserrat", "sans-serrif"`,
      margin: '0 auto',
      //   padding: '100px 20px',
      padding: '10px 20px',
      borderRadius: '3px',
      marginBottom: '30px',
      //   background: '#ffffff',
      //   opacity: '0.1',
      backgroundColor: '#ffffff26',
      width: '30%',
      textAlign: 'center',
      fontSize: '72px',
      lineHeight: '72px',
    },
    numberStyle: {
      color: '#ffffff',
      background: '#ffffff',
      opacity: '0.1',
      textAlign: 'center',
      fontSize: '72px',
      lineHeight: '72px',
      fontFamilty: `"Montserrat", "sans-serrif"`,
      padding: '10px 20px',
      borderRadius: '3px',
      marginBottom: '30px',
      display: 'inline-block',
      //   marginTop: '100px',
    },

    authorName: {
      fontSize: '14px',
      color: '#999999',
      marginTop: '-4px',
      textAlign: 'center',
    },
    imageTextContainer: {
      marginTop: '40px',
      //   display: 'flex',
      //   flexDirection: 'column',
      //   marginBottom: '30px',
    },
  })
);
