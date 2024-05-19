import React from 'react';
import './Bet.css'; // Assuming you have a Bet.css file in the same directory

export default function Bet() {
  const games = ['Mohamed Light vs. TRB Wallace', 'Guriko vs. CAL Sub', 'Vitor75 vs. SandBox'];

  return (
    <main
    className="px-2 sm:px-8 md:px-24 py-12"
    style={{
        backgroundImage: 'url(/background4.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        backgroundColor: 'rgba(0,0,0, 0.80)',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
    }}
    >
    <div
        style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)', 
            borderRadius: '20px', 
            padding: '20px',
            margin: '20px 0',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
        }}
        >
        <h1 style={{ color: 'black', fontSize: '2em', fontWeight: 'bold' }}>Welcome to the Clash Royale Betting Community!</h1>
        <h1 style={{ color: 'black', fontSize: '2em', fontWeight: 'bold' }}>Below are today's bets in the community! Come back often, as these refresh daily!</h1>
    </div>
    {games.map((game, index) => {
    const [personA, personB] = game.split(' vs. '); 
    const personAData = ['https://royaleapi.com/player/G9YV9GR8R?lang=en', 'https://royaleapi.com/player/2LJ0ULYCC?lang=en', 'https://royaleapi.com/player/8LJ92G8UG?lang=en'];
    const personBData = ['https://royaleapi.com/player/YJPPGL00?lang=en', 'https://royaleapi.com/player/U890Q9UQ/battles?lang=en', 'https://royaleapi.com/player/LJP9CU0PG?lang=en'];
    return (
        <div
        key={index}
        style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)', 
            borderRadius: '20px', 
            padding: '20px',
            margin: '20px 0',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
        }}
        >
        <h3 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '10px' }}>
            <span style={{ color: 'red' }}>{personA}</span> vs. <span style={{ color: 'blue' }}>{personB}</span>
        </h3>
        <button className="button-over">Over</button>
        <button className="button-under">Under</button>
        <a href={personAData[index]} style={{ color: 'red', textDecoration: 'none', display: 'block', marginTop: '10px' }}>Learn more about {personA}</a>
        <a href={personBData[index]} style={{ color: 'blue', textDecoration: 'none', display: 'block', marginTop: '10px' }}>Learn more about {personB}</a>
        </div>
    );
    })}

    <p style={{ color: 'white', fontSize: '1.2em' }}>Note: Betting is only allowed for Canadian adults aged 19+. Please gamble responsibly. <a href='https://www.canada.ca/en/health-canada/services/substance-use/get-help-with-substance-use.html'>Link to Substance Abuse Help Canada</a></p>
    </main>
  );
}