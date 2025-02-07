import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import XpcSwap from "../../components/Xpc/XpcSwap";
import buyXPCIcon from "../../img/ic_buy_glp.svg";
import Footer from "../../Footer";
import "./BuyXpc.css";

import { useChainId } from "../../Helpers";
import { getNativeToken } from "../../data/Tokens";

export default function BuyXpc(props) {
  const { chainId } = useChainId();
  const history = useHistory();
  const [isBuying, setIsBuying] = useState(true);
  const nativeTokenSymbol = getNativeToken(chainId).symbol;

  useEffect(() => {
    const hash = history.location.hash.replace("#", "");
    const buying = hash === "redeem" ? false : true;
    setIsBuying(buying);
  }, [history.location.hash]);

  return (  
    <div className="default-container page-layout">
      <div className="section-title-block">
        <div className="section-title-icon">
          <img src={buyXPCIcon} alt="buyXPCIcon" />
        </div>
        <div className="section-title-content">
          <div className="Page-title">Buy / Sell XPC</div>
          <div className="Page-description">
            Purchase{" "}
            <a href="https://gmxio.gitbook.io/gmx/xpc" target="_blank" rel="noopener noreferrer">
              XPC tokens
            </a>{" "}
            to earn {nativeTokenSymbol} fees from swaps and leverages trading.
            <br />
            Note that there is a minimum holding time of 15 minutes after a purchase.
            <br />
            View <Link to="/earn">staking</Link> page.
          </div>
        </div>
      </div>
      <XpcSwap {...props} isBuying={isBuying} setIsBuying={setIsBuying} />
      <Footer />
    </div>
  );
}
