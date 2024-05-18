// "use client";

// import { ESize, EState, MbButton } from "mintbase-ui";
// import Items from "./Items";
// import { useState } from "react";
// import { SelectedNft } from "@/types/types";
// import BuyModal from "./BuyModal/BuyModal";

// const LandingPage = () => {
//   const [showBuyModal, setShowBuyModal] = useState(false);
//   const [selectedItem, setSelectedItem] = useState({} as SelectedNft);

//   const handleOpenBuyModal = (item: SelectedNft) => {
//     setSelectedItem(item);
//     setShowBuyModal(true);
//   };

//   const handleCloseBuyModal = () => {
//     setSelectedItem({} as SelectedNft);
//     setShowBuyModal(false);
//   };

//   return (
//     <div className="w-full flex flex-col items-start gap-4">
//       {/* <div className="text-[40px]">BASEMINT - WHERE E-SPORTS LIVE</div> */}
//       <div>
//         <p>
//           1. Watch and interact with gamer twitch streams to acculumate points.
//         </p>
//         <p>2. Bet on your favorite E-Sport player to win points</p>
//         <p>3. When you reach 10N, you mint your free ticket to the next live E-Sports game directly. You can also sell it or buy one from a different user!</p>
//         <div className="mt-4 flex">
//           <a
//             target="_blank"
//             rel="noreferrer"
//             href="https://mintbase.xyz/leaderboard"
//           >
//             <MbButton
//               label="See Leaderboard"
//               size={ESize.MEDIUM}
//               state={EState.ACTIVE}
//             />
//           </a>
//         </div>
//       </div>
//       <div className="flex w-full">
//         <Items showModal={handleOpenBuyModal} />
//       </div>
//       <div className="mx-24 mt-4">
//         {!!showBuyModal && (
//           <BuyModal closeModal={handleCloseBuyModal} item={selectedItem} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

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
        <p>Watch and interact with gamer twitch streams to accumulate points.</p>
        <p>Bet on your favorite E-Sport player to win points.</p>
        <p>When you reach 10N, you mint your free ticket to the next live E-Sports game directly. You can also sell it or buy one from a different user!</p>
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
