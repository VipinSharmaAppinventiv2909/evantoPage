import { makeStyles, createStyles } from '@mui/styles';

export default makeStyles(() =>
  createStyles({
    mainContainer: {
      width: '100vw',
      height: '70vh',
      // marginTop: '100px',
    },
    imageContainer: {
      width: '100%',
      height: '65%',
    },
    container: {
      width: '20%',
      // display: 'flex',
      margin: '0 auto',
      marginTop: '50px',

      // flexDi
    },
    socialMediaContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: '0 auto',
      width: '100%',
    },
    socialImageContainer: {
      width: '60px',
      height: '60px',
    },

    authorName: {
      fontSize: '14px',
      color: '#999999',
      marginTop: '20px',
      textAlign: 'center',
    },
  })
);
