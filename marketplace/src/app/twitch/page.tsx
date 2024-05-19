"use client";

import { FinalExecutionOutcome } from "@mintbase-js/auth";
import { useMbWallet } from "@mintbase-js/react";
import {
  execute,
  ExecuteArgsResponse,
  MAX_GAS,
  NearContractCall,
  NearExecuteOptions,
} from "@mintbase-js/sdk";
import { MbButton } from "mintbase-ui";
import React, { useEffect, useState } from "react";

const streamer = "gronkhtv";

export default function Twitch() {
  const [seconds, setSeconds] = useState(0);
  const { selector, activeAccountId } = useMbWallet();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const myCustomContractCall: NearContractCall<ExecuteArgsResponse> = {
    signerId: activeAccountId!,
    contractAddress: "adamo.testnet",
    methodName: "twitch_engagement",
    args: {},
    gas: MAX_GAS,
    deposit: 0,
  };

  const makeSmartContractCall = async (): Promise<FinalExecutionOutcome> => {
    const wallet = await selector.wallet();
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

  function receiveNear() {
    makeSmartContractCall()
      .then((res: FinalExecutionOutcome) =>
        console.log("got transaction result:", res)
      )
      .catch((err) => console.error("things went wrong", err));
  }

  return (
    <div
      style={{
        backgroundImage: "url(/electro_giants.jpg)",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px", // Add padding to create space around the content
      }}
    >
      <div className="flex flex-col gap-3 items-center w-full h-[90%]">
        <div className="flex flex-row justify-center items-center w-full h-[90%] ml-0 mt-auto">
          <iframe
            src={`https://player.twitch.tv/?channel=${streamer}&parent=localhost`}
            height="100%"
            width="70%"
            style={{
              border: "none",
              overflow: "hidden",
            }}
            allowFullScreen={true}
          ></iframe>
          <iframe
            id="chat_embed"
            src={`https://www.twitch.tv/embed/${streamer}/chat?parent=localhost`}
            height="100%"
            width="30%"
          >
            ``
          </iframe>
        </div>
        <div>
          {seconds > 10 && (
            <MbButton onClick={receiveNear} label="Collect Near" />
          )}
        </div>
      </div>
    </div>
  );
}
