import React from 'react';
import styles from './creativity';

export default function Creative() {
  const classes = styles();
  return (
    <>
      <div
        style={{
          height: '40vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className={classes.container}>
          <div className={classes.innerContainer}>
            {/* <div style={{ marginTop: '100px' }}> */}
            <h1 className={classes.headingContainer}>
              "Creativity is allowing yourself to make mistakes Art is knowing
              which ones to keep"
            </h1>
            {/* </div> */}
            <p className={classes.authorName}>~Richard Johnson~</p>
          </div>
        </div>
      </div>
    </>
  );
}
