import React from 'react';

export default function Twitch() {
  const streamer = 'gronkhtv';

  return (
    <div style={{
      backgroundImage: 'url(/electro_giants.jpg)',
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column', 
      padding: '50px'
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%', 
        height: '80%', 
        margin: '0 auto'
      }}>
        <iframe 
          src={`https://player.twitch.tv/?channel=${streamer}&parent=localhost`} 
          height="100%" 
          width="70%" 
          style={{
            border: 'none',
            overflow: 'hidden'
          }}
          allowFullScreen={true}>
        </iframe>
        <iframe 
          id="chat_embed"
          src={`https://www.twitch.tv/embed/${streamer}/chat?parent=localhost`}
          height="100%"
          width="30%">
        </iframe>
      </div>
      <button style={{
        backgroundColor: '#9664FF', 
        color: 'white', 
        border: 'none',
        padding: '10px 20px', 
        borderRadius: '5px',
        marginTop: '20px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}>
        Recieve Near
      </button>
    </div>
  );
}
