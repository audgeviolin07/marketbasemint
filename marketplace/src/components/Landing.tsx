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
    <div className="w-full flex flex-col items-center gap-4 mt-4">
      <div className="flex justify-between items-center gap-4 w-full" style={{ marginBottom: '30px' }}>
        <img 
          src="/king_logo.png" 
          alt="Description of image" 
          style={{
            height: '350px', 
          }}
        />
        <a href="/twitch">
          <img 
            src="/twitch.png" 
            alt="Description of image" 
            style={{
              height: '250px', 
              borderRadius: '10px'
            }}
          />
        </a>
        <a href="/bet">
          <img 
            src="/betbetbet.png" 
            alt="Description of image" 
            style={{
              height: '250px', 
              borderRadius: '10px'
            }}
          />
        </a>
      </div>


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
        <p>Watch twitch and bet on games to earn tokens! When you reach 10N, you mint your free ticket to the next live E-Sports game directly. You can also sell it or buy one from a different user!</p>
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
