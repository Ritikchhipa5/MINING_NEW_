import React from "react";

function FooterSection() {
  return (
    <>
      <div>
        <div>
          <h3 className="text-3xl font-bold mb-3">Partner</h3>
          <p className="text-xl mb-2">We have a secure audit report</p>
        </div>
        <div className="flex justify-center m-10">
          <div className="md:flex justify-between gap-4 flex-wrap  ">
            <div className="max-w-[150px] w-full p-4 mb-5 rounded shadow-lg shadow-black-500/50">
              <img src="https://www.logo.wine/a/logo/Binance/Binance-Academy-Horizontal-Logo.wine.svg"></img>
            </div>
            <div className="max-w-[150px] w-full p-4  mb-5  rounded shadow-lg shadow-black-500/50">
              <img src="https://1000logos.net/wp-content/uploads/2022/03/Coinbase-logo.png"></img>
            </div>
            <div className="flex max-w-[150px] w-full p-4 mb-5 rounded shadow-lg shadow-black-500/50">
              <img src="https://lever-client-logos.s3.us-west-2.amazonaws.com/3530792d-a2b9-422a-8e00-dc0ea639941b-1632720076474.png"></img>
            </div>
            <div className="flex max-w-[150px] w-full p-4 mb-5 rounded shadow-lg shadow-black-500/50">
              <img src="https://www.ledger.com/wp-content/uploads/2019/06/assets_logo_metamask.jpg"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSection;
