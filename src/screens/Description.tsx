import React from 'react';
import styles from './aboutStyles';

export default function Description() {
  const classes = styles();
  return (
    <>
      <div className={classes.container} style={{ marginTop: '120px' }}>
        <div className={classes.sectionTitle}>
          <h1>WE ARE GOOD AT</h1>
          <span className={classes.border}></span>
          <p style={{ fontSize: '14px' }}>
            We're an agency born out of a passion to make great products. We
            help companies and startups from all over the world materialize
            their ideas into great projects
          </p>
        </div>
        {/* <div className={classes.screens}>
          <div className={classes.smallScreenLeft}>
            <img
              className={classes.elementFromLeft}
              src="/small_left_screen.png"
              alt=""
              style={{ opacity: 1, left: '0px' }}
            />
          </div>
          <div className={classes.smallScreenRight}>
            <img
              className={classes.elementFromRight}
              src="/small_right_screen.png"
              alt=""
              style={{ opacity: 1, right: '0px' }}
            />
          </div>
          <div className={classes.bigScreen}>
            <img
              className={classes.elementFadeIn}
              src="/big_screen.png"
              alt=""
              style={{ opacity: 1, right: '0px' }}
            />
          </div>
        </div> */}
        <div style={{ display: 'flex' }}>
          <div className={classes.oneHalfFirst}>
            <div
              style={{
                width: '100%',
                marginBottom: '50px',
                backgroundColor: '#dddddd',
                borderRadius: '3px 3px 3px 3px',
              }}
            >
              <span
                style={{
                  width: '80%',
                  height: '35px',
                  backgroundColor: '#222222',
                }}
              ></span>
              <span
                style={{
                  width: '20%',
                  height: '35px',
                  border: '1px solid #ccc',
                }}
              ></span>
            </div>
            <div
              style={{
                width: '100%',
                marginBottom: '50px',
                background: '#dddddd',
                borderRadius: '3px 3px 3px 3px',
              }}
            >
              <span
                style={{
                  width: '80%',
                  height: '35px',
                  border: '1px solid #ccc',
                  backgroundColor: '#222222',
                }}
              ></span>
            </div>
            <div
              style={{
                width: '100%',
                marginBottom: '50px',
                background: '#dddddd',
                borderRadius: '3px 3px 3px 3px',
              }}
            >
              <span
                style={{
                  width: '100%',
                  height: '35px',
                  border: '1px solid #ccc',
                  backgroundColor: '#222222',
                }}
              ></span>
            </div>
          </div>
          <div className={classes.oneLastHalf}>
            <div
              style={{
                width: '100%',
                marginBottom: '50px',
                background: '#dddddd',
                borderRadius: '3px 3px 3px 3px',
              }}
            >
              <span
                style={{
                  width: '70%',
                  height: '35px',
                  border: '1px solid #ccc',
                  backgroundColor: '#222222',
                }}
              ></span>
            </div>
            <div
              style={{
                marginBottom: '50px',
                background: '#dddddd',
                borderRadius: '3px 3px 3px 3px',
              }}
            >
              <span
                style={{
                  width: '80%',
                  height: '35px',
                  border: '1px solid #ccc',
                }}
              ></span>
            </div>
            <div
              style={{
                marginBottom: '50px',
                background: '#dddddd',
                borderRadius: '3px 3px 3px 3px',
              }}
            >
              <span
                style={{
                  width: '80%',
                  height: '35px',
                  border: '1px solid #ccc',
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
