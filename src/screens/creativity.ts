import { makeStyles, createStyles } from '@mui/styles';

export default makeStyles(() =>
  createStyles({
    container: {
      backgroundImage: 'url(separator2.jpg)',
      backgroundPosition: '50% -45px',
      textAlign: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed !important',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '50px',
    },
    innerContainer: {
      background: '#000000',
      opacity: 0.8,
      height: '100%',
    },
    headingContainer: {
      color: '#ffffff',
      fontSize: '48px',
      width: '70%',
      fontFamily: 'Montserrat, sans-serrif',

      margin: '0 auto',
      padding: '30px 0 10px',
    },
    authorName: {
      fontSize: '14px',
      color: '#999999',
      marginTop: '20px',
      textAlign: 'center',
    },
  })
);
