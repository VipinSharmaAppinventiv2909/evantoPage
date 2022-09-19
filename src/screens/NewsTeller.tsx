import React from 'react';

export default function NewsTeller() {
  return (
    <>
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <div style={{ background: '#222', width: '100%', height: '100px' }}>
          <div
            style={{
              width: '70%',
              marginLeft: '15%',
              marginRight: '15%',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'space-between',
              paddingTop: '20px',
            }}
          >
            <div style={{ height: '50px', fontSize: '36px', color: 'white' }}>
              ENTER YOUR E-MAIL
            </div>
            <div
              style={{
                height: '20px',
                fontSize: '16px',
                border: '1px solid #fff',
                // textAlign: 'center',
                color: '#fff',
                padding: '10px 10px 10px 10px',
              }}
            >
              SUBSCRIBE NOW
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: 'url(separator1.jpg)',
            backgroundPosition: '50% -45px',
            textAlign: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed !important',
            width: '100%',
            height: '80vh',
          }}
        >
          <div
            style={{
              background: '#000000',
              opacity: 0.8,
              height: '100%',
            }}
          >
            <div
              style={{ width: '70%', margin: '0 auto', padding: '100px 20px' }}
            >
              <div style={{ marginBottom: '70px' }}>
                <a href="https://twitter.com/Photoshop" target="_blank">
                  <img
                    src="/twitter_white_big.png"
                    alt=""
                    style={{ width: '70px', height: '70px' }}
                  />
                </a>
                <p style={{ opacity: 0.5, color: '#fff' }}>@envato</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
