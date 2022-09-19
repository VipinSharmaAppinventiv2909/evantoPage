import React from 'react';
import styles from './teamDescStyles';

export default function Services() {
  const classes = styles();
  return (
    <>
      <div style={{ width: '100%' }}>
        <div className={classes.serviceContainer}>
          <div className={classes.sectionTitle}>
            <h1>SERVICES</h1>
            <span className={classes.border}></span>
            <p style={{ fontSize: '14px', color: '#999999' }}>
              We believe that apps and websites should not only be eye catching
              but actually provide a great user experience that users will
              remember.
            </p>
          </div>
          {/* <div className={classes.avatarContainer}>
            <div className={classes.imageContainer}>
              <div style={{ borderRadius: '3px', position: 'relative' }}></div>
              <img src="./team1.png" alt="team1" />
              <span style={{ color: '#222222', marginTop: '10px' }}>
                MICHEAL BROAD
              </span>
              <p>CEO Founder</p>
            </div>
            <div className={classes.imageContainer}>
              <div style={{ borderRadius: '3px', position: 'relative' }}></div>
              <img src="./team2.png" alt="team1" />
              <span style={{ color: '#222222', marginTop: '10px' }}>
                AMANDA WHITE
              </span>
              <p>Web Designer</p>
            </div>
            <div className={classes.imageContainer}>
              <div style={{ borderRadius: '3px', position: 'relative' }}></div>
              <img src="./team3.png" alt="team1" />
              <span style={{ color: '#222222', marginTop: '10px' }}>
                BRAD TRAVERSY
              </span>
              <p>Developer</p>
            </div>
          </div> */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                marginBottom: '20px',
                marginRight: '4%',
                position: 'relative',
                width: '45%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  //   alignItems: 'center',
                  margin: '15px 0px',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className={classes.serviceTextHeadingLeft}>
                    IDENTITY AND BRANDING
                  </span>
                  <p
                    style={{
                      textAlign: 'right',
                      color: '#999999',
                      fontSize: '14px',
                      fontFamily: 'Open sans, sans-serif',
                      marginTop: '0px',
                    }}
                  >
                    A beautiful product needs to be complemented with a great
                    branding. Our design team will help you create it
                  </p>
                </div>
                <div
                  style={{
                    // backgroundImage: 'url(/user-profile.png)',
                    height: '40px',
                    width: '40px',
                    marginLeft: '20px',
                    marginTop: '12px',
                  }}
                >
                  <img
                    style={{
                      // backgroundImage: 'url(/user-profile.png)',
                      height: '40px',
                      width: '40px',
                    }}
                    src="/user-profile.png"
                    alt="image"
                  />
                </div>
              </div>

              {/* this is 2nd div */}

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  //   alignItems: 'center',
                  margin: '15px 0px',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className={classes.serviceTextHeadingLeft}>
                    IDENTITY AND BRANDING
                  </span>
                  <p
                    style={{
                      textAlign: 'right',
                      color: '#999999',
                      fontSize: '14px',
                      fontFamily: 'Open sans, sans-serif',
                      marginTop: '0px',
                    }}
                  >
                    A beautiful product needs to be complemented with a great
                    branding. Our design team will help you create it
                  </p>
                </div>
                <div
                  style={{
                    // backgroundImage: 'url(/user-profile.png)',
                    height: '40px',
                    width: '40px',
                    marginLeft: '20px',
                    marginTop: '12px',
                  }}
                >
                  <img
                    style={{
                      // backgroundImage: 'url(/user-profile.png)',
                      height: '40px',
                      width: '40px',
                    }}
                    src="/user-profile.png"
                    alt="image"
                  />
                </div>
              </div>

              {/* This is 3rd div */}

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: '15px 0px',
                  //   alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className={classes.serviceTextHeadingLeft}>
                    IDENTITY AND BRANDING
                  </span>
                  <p
                    style={{
                      textAlign: 'right',
                      color: '#999999',
                      fontSize: '14px',
                      fontFamily: 'Open sans, sans-serif',
                      marginTop: '0px',
                    }}
                  >
                    A beautiful product needs to be complemented with a great
                    branding. Our design team will help you create it
                  </p>
                </div>
                <div
                  style={{
                    // backgroundImage: 'url(/user-profile.png)',
                    height: '40px',
                    width: '40px',
                    marginLeft: '20px',
                    marginTop: '12px',
                  }}
                >
                  <img
                    style={{
                      // backgroundImage: 'url(/user-profile.png)',
                      height: '40px',
                      width: '40px',
                    }}
                    src="/user-profile.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            {/* end of first half section  */}
            <div
              style={{
                marginBottom: '20px',
                position: 'relative',
                width: '45%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* this is 1st div */}
              <div className={classes.serviceParaContainer}>
                <div
                  style={{
                    // backgroundImage: 'url(/user-profile.png)',
                    height: '40px',
                    width: '40px',
                    marginRight: '20px',
                    marginTop: '12px',
                  }}
                >
                  <img
                    style={{
                      // backgroundImage: 'url(/user-profile.png)',
                      height: '40px',
                      width: '40px',
                    }}
                    src="/user-profile.png"
                    alt="image"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className={classes.serviceTextHeadingRight}>
                    IDENTITY AND BRANDING
                  </span>
                  <p className={classes.serviceParaTextRight}>
                    A beautiful product needs to be complemented with a great
                    branding. Our design team will help you create it
                  </p>
                </div>
              </div>

              {/* this is 2nd div */}
              <div className={classes.serviceParaContainer}>
                <div
                  style={{
                    // backgroundImage: 'url(/user-profile.png)',
                    height: '40px',
                    width: '40px',
                    marginRight: '20px',
                    marginTop: '12px',
                  }}
                >
                  <img
                    style={{
                      // backgroundImage: 'url(/user-profile.png)',
                      height: '40px',
                      width: '40px',
                    }}
                    src="/user-profile.png"
                    alt="image"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className={classes.serviceTextHeadingRight}>
                    IDENTITY AND BRANDING
                  </span>
                  <p className={classes.serviceParaTextRight}>
                    A beautiful product needs to be complemented with a great
                    branding. Our design team will help you create it
                  </p>
                </div>
                {/* <div
                  style={{
                    backgroundImage: 'url(/logo512.png)',
                    height: '40px',
                    width: '40px',
                  }}
                ></div> */}
              </div>

              {/* this is 3rd div */}

              <div className={classes.serviceParaContainer}>
                <div
                  style={{
                    // backgroundImage: 'url(/user-profile.png)',
                    height: '40px',
                    width: '40px',
                    marginRight: '20px',
                    marginTop: '12px',
                  }}
                >
                  <img
                    style={{
                      // backgroundImage: 'url(/user-profile.png)',
                      height: '40px',
                      width: '40px',
                    }}
                    src="/user-profile.png"
                    alt="image"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className={classes.serviceTextHeadingRight}>
                    IDENTITY AND BRANDING
                  </span>
                  <p className={classes.serviceParaTextRight}>
                    A beautiful product needs to be complemented with a great
                    branding. Our design team will help you create it
                  </p>
                </div>
                {/* <div
                  style={{
                    // backgroundImage: 'url(/user-profile.png)',
                    height: '40px',
                    width: '40px',
                  }}
                >
                  <img
                    style={{
                      // backgroundImage: 'url(/user-profile.png)',
                      height: '40px',
                      width: '40px',
                    }}
                    src="/user-profile.png"
                    alt="image"
                  />
                </div> */}
              </div>
            </div>
            {/* end of 2nd half */}
          </div>
        </div>
      </div>
    </>
  );
}
