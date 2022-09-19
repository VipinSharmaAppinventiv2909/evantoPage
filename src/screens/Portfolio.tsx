import React from 'react';
import styles from './portfolio';

export default function Portfolio() {
  const classes = styles();
  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}>
        <div className={classes.container}>
          <div className={classes.sectionTitle}>
            <h1>PORTFOLIO</h1>
            <span className={classes.border}></span>
            <p style={{ fontSize: '14px', color: '#999999' }}>
              We help build products from idea to launch. We're experts at web &
              mobile design, branding, iOS development & frontend. Here's some
              of our work.
            </p>
          </div>
        </div>
        <div className={classes.menuItems}>
          <div className={classes.menuItem}>ALL</div>
          <div className={classes.menuItem}>BRANDING</div>
          <div className={classes.menuItem}>DESIGN</div>
          <div className={classes.menuItem}>PHOTOGRAPHY</div>
          <div className={classes.menuItem}>VIDEOGRAPHY</div>
          <div className={classes.menuItem}>WEB</div>
        </div>
        <div className={classes.imageContainer}>
          <img className={classes.imageStyle} src="/abcd.jpg" alt="image" />
          <img className={classes.imageStyle} src="/abcd.jpg" alt="image" />
          <img className={classes.imageStyle} src="/abcd.jpg" alt="image" />
          <img className={classes.imageStyle} src="/abcd.jpg" alt="image" />
        </div>
        <div className={classes.contactUsContainer}>
          <h4 className={classes.contactUsHeading}>
            Have you fallen in love with out portfolio?
          </h4>
          <button className={classes.buttonContainer}>contact us</button>
        </div>
      </div>
    </>
  );
}