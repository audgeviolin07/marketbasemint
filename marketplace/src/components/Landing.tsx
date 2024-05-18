"use client";

import { ESize, EState, MbButton } from "mintbase-ui";
import Items from "./Items";
import { useState } from "react";
import { SelectedNft } from "@/types/types";
import BuyModal from "./BuyModal/BuyModal";

const LandingPage = () => {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({} as SelectedNft);

  const handleOpenBuyModal = (item: SelectedNft) => {
    setSelectedItem(item);
    setShowBuyModal(true);
  };

  const handleCloseBuyModal = () => {
    setSelectedItem({} as SelectedNft);
    setShowBuyModal(false);
  };

  return (
    <div className="w-full flex flex-col items-start gap-4 mt-4">
      <div className="flex items-center gap-4 w-full">
        <img 
          src="/iconclash.png" 
          alt="Description of image" 
          style={{
            width: '30%', 
            borderRadius: '10px'
          }}
        />
        <img 
          src="/twitch.png" 
          alt="Description of image" 
          style={{
            width: '30%', 
            borderRadius: '10px'
          }}
        />
         <img 
          src="/betbetbet.png" 
          alt="Description of image" 
          style={{
            width: '30%', 
            borderRadius: '10px'
          }}
        />
        {/* <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Your New Basemint</h1> */}
      </div>
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          borderRadius: '10px', 
          padding: '20px',
          color: 'black', 
          fontFamily: 'Arial',
          fontWeight: 'bold'
        }}
      >
        <p>Watch twitch and bet on games to earn points! When you reach 10N, you mint your free ticket to the next live E-Sports game directly. You can also sell it or buy one from a different user!</p>
        <div className="mt-4 flex">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mintbase.xyz/leaderboard"
          >
            <MbButton
              label="See Leaderboard"
              size={ESize.MEDIUM}
              state={EState.ACTIVE}
              style={{
                backgroundColor: '#9664FF', // Replace with the exact color code
                color: 'white'
              }}
            />
          </a>
        </div>
      </div>
      <div className="flex w-full">
        <Items showModal={handleOpenBuyModal} />
      </div>
      <div className="mx-24 mt-4">
        {!!showBuyModal && (
          <BuyModal closeModal={handleCloseBuyModal} item={selectedItem} />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
