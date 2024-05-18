"use client";
import { useMbWallet } from "@mintbase-js/react";
import { MbButton } from "mintbase-ui";
import Link from "next/link";
import Image from 'next/image';

const Header = () => {
  const { isConnected, connect, activeAccountId, disconnect } = useMbWallet();

  const buttonLabel = isConnected
    ? `Sign Out ${activeAccountId}`
    : " Connect NEAR Wallet";

  const buttonAction = isConnected ? disconnect : connect;

  return (
    <div className="flex justify-between items-center bg-white p-4 sticky top-0 border-b z-30">
      <div className="flex gap-4 items-center">
        <Link href="/" className="flex gap-2 items-center">
          <div className="text-black font-bold"> BASEMINT : WHERE E-SPORTS LIVE</div>
        </Link>
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/output.png" alt="Twitch Logo" width={48} height={48} />
        </Link>
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/bet.png" alt="Twitch Logo" width={48} height={48} />
        </Link>
      </div>
      <div>
        <MbButton 
          onClick={buttonAction} 
          label={buttonLabel}
          style={{
            backgroundColor: '#9664FF', // Replace with the exact color code
            color: 'white'
          }}
        />
      </div>
    </div>
  );
};

export default Header;
