import { useWeb3React } from "@web3-react/core";
import React from "react";
import { connectors } from "../connectors";
import useAuth from "./../hooks/useAuth";
function Header(props) {
  const { login, logout } = useAuth();
  const { active, deactivate } = useWeb3React();

  return (
    <div className="h-[80px] z-[1000] relative bg-[#fff] flex items-center shadow-lg shadow-black-500/50">
      <div className="px-[10px] mx-auto w-[1100px] flex justify-between items-center">
        <div className="text-base font-semibold md:p-3 md:px-5 md:text-2xl">
          USDT MINING
        </div>
        <div
          onClick={() => {
            !active ? login(connectors.walletconnect) : logout();

            // props.setisConnect(true);
          }}
          className="p-5 md:p-0 cursor-pointer border bg-[#fff] w-[150px] rounded text-sm justify-center flex  items-center shadow-lg shadow-black-500/50"
        >
          <span className="">{active ? "DISCONNECT" : "CONNECT"}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
