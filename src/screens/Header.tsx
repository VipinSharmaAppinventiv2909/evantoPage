import React from 'react';
import styles from './headerStyles';

export default function Header() {
  const classes = styles();
  return (
    <>
      <div className={classes.headerContainer}>
        <div className={classes.evantoLogo}>
          <a
            className={classes.evantoLink}
            href="https://themeforest.net/item/newave-responsive-one-page-parallax-template/5925116"
          >
            Envato Market
          </a>
        </div>
        <div className={classes.buyNowButtonContainer}>
          <div className={classes.buyNowButton}>
            <a
              className={classes.butNowButtonLink}
              href="https://themeforest.net/checkout/from_item/5925116?license=regular&amp;support=bundle_6month"
            >
              Buy now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
