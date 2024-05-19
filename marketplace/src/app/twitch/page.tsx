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
    contractAddress: "adamomarali.near",
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
        flexDirection: "column",
        padding: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "80%",
          margin: "0 auto",
        }}
      >
        <iframe
          src={`https://player.twitch.tv/?channel=${streamer}&parent=marketbasemint.vercel.app`}
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
          src={`https://www.twitch.tv/embed/${streamer}/chat?parent=marketbasemint.vercel.app`}
          height="100%"
          width="30%"
        ></iframe>
      </div>
      {seconds > 5 && (
        <button
          style={{
            backgroundColor: "#9664FF",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            marginTop: "20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={receiveNear}
        >
          Recieve Near
        </button>
      )}
    </div>
  );
}
