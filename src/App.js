import "./App.css";
import FAQ from "./components/FAQ";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TabSection from "./components/TabSection";
import TabSection2 from "./components/TabSection2";
import React, { useEffect } from "react";
import {
  useParams
} from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import { MINING_ABI } from "./Config/MINING_ABI";
import { MINING_CONTRCT } from "./Config/contract";
function App() {
  const { id } = useParams()
  console.log(id)
  const { active, library, account } = useWeb3React();
  const [isConnect, setisConnect] = React.useState(false);
  const [inviteCode,setInviteCode] = React.useState("")
  const [update, againUpdate] = React.useState(false);
  const [isLoading,setIsLoading] = React.useState(false);
  const [inviteUserAddress, setInviteUserAddress]=React.useState("0x0000000000000000000000000000000000000000")
  let web3 = new Web3("https://ropsten.infura.io/v3/1da2a4aeb9a949d586c8bcbf4a43b8b6");
  useEffect( async () => {
  if(active){
   
    web3 = new Web3(library.provider);
    if(id===undefined){
      let joinData = await new web3.eth.Contract(MINING_ABI, MINING_CONTRCT).methods.joinLink(account,0).call();
      setInviteUserAddress(joinData)
    }else{
      var r = /\d+/;
      let num = id.match(r);
      console.log(num)
      if(num===null){
        let joinData = await new web3.eth.Contract(MINING_ABI, MINING_CONTRCT).methods.joinLink(account,0).call();
        setInviteUserAddress(joinData)
      }
        else{let joinData = await new web3.eth.Contract(MINING_ABI, MINING_CONTRCT).methods.joinLink(account,parseInt(num)).call();
          setInviteUserAddress(joinData)
          console.log(joinData)
        }
    }
   
      // fetch("/generateLink?userAddress="+account,)
      // .then(response => response.json())
      // .then(data => setInviteCode(data.link))

      // fetch("/getAddrByCode?UnicCode="+id,)
      // .then(response => response.json())
      // .then(data => setInviteUserAddress(data.address)
  }
   
  }, [active])
  console.log(inviteCode,inviteUserAddress)
  

  if(isLoading){
return(
  <div>Loading.....</div>
)
  }else{
    return (
      <div className="App">
        <Header/>
        <HeroSection isConnect={isConnect} isLoading={isLoading} inviteCode={inviteCode} inviteUserAddress={inviteUserAddress} setIsLoading={setIsLoading} setInviteCode={setInviteCode}/>
        <TabSection isConnect={isConnect} setIsLoading={setIsLoading}
          update={update}/>
        <TabSection2 isConnect={isConnect}setIsLoading={setIsLoading}    againUpdate={againUpdate}
          update={update}/>
        <FAQ />
        <FooterSection />
  
      </div>
    );
  }
  
}

export default App;
