import React from 'react';
import styles from './technology';

export default function Technology() {
  const classes = styles();
  return (
    <>
      <div style={{ width: '100%' }}>
        <div className={classes.container}>
          <div className={classes.sectionTitle}>
            <h1>WE LOVE TECHNOLOGY</h1>
            <span className={classes.border}></span>
            <p style={{ fontSize: '14px', color: '#999999' }}>
              We tackle business problems with intelligence. We use cutting-edge
              tech and cutting-edge thinking to bring brands to life online and
              direct consumer behaviour.
            </p>
          </div>
          <div className={classes.templateContainer}>
            <div>
              <img
                style={{ width: '70px', height: '70px' }}
                src="/user-profile.png"
              />
              <h5>CONSULTATION</h5>
              <p className={classes.textContent}>
                We tackle business problems with intelligence. We use
                cutting-edge tech and cutting-edge thinking to bring.
              </p>
            </div>
            <div>
              <img
                style={{ width: '70px', height: '70px' }}
                src="/user-profile.png"
              />
              <h5>DESIGN</h5>
              <p className={classes.textContent}>
                We tackle business problems with intelligence. We use
                cutting-edge tech and cutting-edge thinking to bring.
              </p>
            </div>
            <div>
              <img
                style={{ width: '70px', height: '70px' }}
                src="/user-profile.png"
              />
              <h5>USER EXPERIENCE</h5>
              <p className={classes.textContent}>
                We tackle business problems with intelligence. We use
                cutting-edge tech and cutting-edge thinking to bring.
              </p>
            </div>
            <div>
              <img
                style={{ width: '70px', height: '70px' }}
                src="/user-profile.png"
              />
              <h5>DEVELOPMENT</h5>
              <p className={classes.textContent}>
                We tackle business problems with intelligence. We use
                cutting-edge tech and cutting-edge thinking to bring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
