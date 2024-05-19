import React from 'react'

export default function Bet() {
  return (
    <main
      className="px-2 sm:px-8 md:px-24 py-12"
      style={{
        backgroundImage: 'url(/background4.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        backgroundColor: 'rgba(0,0,0, 0.80)',
      }}
    >
      Look here for today's best bets among the Clash Royale Community. Refresh this page daily for new bets to be placed.
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          borderRadius: '20px', 
          padding: '20px',
          color: 'black', 
          fontFamily: 'Arial',
          fontWeight: 'bold'
        }}
      >
        <p>Watch twitch and bet on games to earn points! When you reach 10N, you mint your free ticket to the next live E-Sports game directly. You can also sell it or buy one from a different user!</p>
      </div>
    </main>
  )
}
