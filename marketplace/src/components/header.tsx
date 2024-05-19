"use client";
import { useMbWallet } from "@mintbase-js/react";
import { MbButton } from "mintbase-ui";
import Link from "next/link";
import Image from "next/image";
import {
  execute,
  ExecuteArgsResponse,
  FinalExecutionOutcome,
  MAX_GAS,
  NearContractCall,
  NearExecuteOptions,
} from "@mintbase-js/sdk";

const Header = () => {
  const { isConnected, connect, activeAccountId, disconnect, selector } =
    useMbWallet();

  const buttonLabel = isConnected
    ? `Sign Out ${activeAccountId}`
    : " Connect NEAR Wallet";

  const buttonAction = isConnected ? disconnect : connect;

  const myCustomContractCall: NearContractCall<ExecuteArgsResponse> = {
    // who should be signing the transaction
    signerId: activeAccountId!,

    // contract address
    contractAddress: "adam-test.testnet",

    // the contract method name
    methodName: "get_hello",

    // specify arguments for call_method
    args: {},

    // amount of gas to attach to the transactions
    gas: MAX_GAS,

    // the deposit to be sent along with the transaction
    deposit: 0,
  };

  const makeSmartContractCall = async (): Promise<FinalExecutionOutcome> => {
    console.log(activeAccountId, selector);
    const wallet = await selector.wallet();
    // to better understand signing options, read the auth module docs
    // to use an account directly, you have to implement this method
    // const account = await authenticateAccount('mynearaccount.near');

    // before the getWallet can be called, you will need to setup context in the browser, it will throw otherwise

    const options: NearExecuteOptions = {
      // account
      wallet,
      callbackUrl: "http://localhost:3000",
    };

    // call sign with options,
    return (await execute(
      options,
      myCustomContractCall
    )) as FinalExecutionOutcome;
  };

  function sendNear() {
    makeSmartContractCall()
      .then((res: FinalExecutionOutcome) =>
        console.log("got transaction result:", res)
      )
      .catch((err) => console.error("things went wrong", err));
  }

  return (
    <div className="flex justify-between items-center bg-white p-4 sticky top-0 border-b z-30">
      <div className="flex gap-4 items-center">
        <Link href="/" className="flex gap-2 items-center">
          <div className="text-black font-bold">
            {" "}
            BASEMINT : WHERE E-SPORTS LIVE
          </div>
        </Link>
        <Link href="/twitch" className="flex gap-2 items-center">
          <Image src="/output.png" alt="Twitch Logo" width={48} height={48} />
        </Link>


        <Link href="/bet" className="flex gap-2 items-center">
          <Image src="/bet.png" alt="Betting Logo" width={48} height={48} />
        </Link>

        <Link href="/players" className="flex gap-2 items-center">
          <Image src="/players.png" alt="Players Logo" width={48} height={48} />
        </Link>

        <MbButton onClick={sendNear} label={"Send Near"} />
      </div>
      <div className="flex row gap-4">
        <MbButton onClick={buttonAction} label={buttonLabel} />
      </div>
    </div>
  );
};

export default Header;
