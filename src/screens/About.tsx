import React from 'react';
import styles from './aboutStyles';

export default function About() {
  const classes = styles();
  return (
    <>
      <div style={{ height: '100vh', width: '100vw' }}>
        <div style={{ height: '45px' }}>
          <div style={{ position: 'relative', top: 0 }}>
            <div className={classes.navbarInner}>
              <div
                style={{
                  width: 'auto',
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  paddingLeft: '25px',
                  paddingRight: '25px',
                }}
              >
                <span className={classes.navbarSpans}>HOME</span>

                <span className={classes.navbarSpans}>ABOUT</span>

                <span className={classes.navbarSpans}>SERVICES</span>

                <span className={classes.navbarSpans}>CLIENTS</span>

                <span className={classes.navbarSpans}>HOME</span>

                <span className={classes.navbarSpans}>PORTFOLIO</span>

                <span className={classes.navbarSpans}>CONTACT</span>

                <span className={classes.navbarSpans}>BLOG</span>

                <span className={classes.navbarSpans}>SHORTCODES</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.newWave}>
          <div className={classes.container}>
            <div className={classes.sectionTitle}>
              <h1>WE ARE NEWWAVE</h1>
              <span className={classes.border}></span>
              <p style={{ fontSize: '14px' }}>
                We're a close team of creatives, designers & developers who work
                together to create beautiful, engaging digital experiences. We
                take pride in delivering only the best.
              </p>
            </div>
            <div className={classes.screens}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
