import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MINING_CONTRCT, USDT_CONTRACT } from "../Config/contract";
import { MINING_ABI } from "../Config/MINING_ABI";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { USDT_ABI } from "../Config/USDTAbi";
import Swal from "sweetalert2"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabSection2(props) {
  const [value, setValue] = React.useState(0);
  const { active, library, account } = useWeb3React();
  const [Data, setData] = React.useState(null);
  let web3 = new Web3("https://ropsten.infura.io/v3/1da2a4aeb9a949d586c8bcbf4a43b8b6");
  React.useEffect(() => {
    if (active) {
      web3 = new Web3(library.provider);
      getData()
    }

  }, [active])


  async function getData() {
    let data = await new web3.eth.Contract(MINING_ABI, MINING_CONTRCT).methods.dataset(account).call();
    setData(data);
  }

  async function Withdraw() {
    if (Data !== null) {
      if (active) {
        web3 = new Web3(library.provider);

      }
      if (parseInt(Data.totalParticipation / Math.pow(10, 18)) >= 10) {
        let bal_MINING_Contract = await new web3.eth.Contract(USDT_ABI, USDT_CONTRACT).methods.balanceOf(MINING_CONTRCT).call()
        let withdraw_balance = await new web3.eth.Contract(MINING_ABI, MINING_CONTRCT).methods.getWithdrawable(account).call()
        console.log(bal_MINING_Contract, withdraw_balance);
        if (parseInt(bal_MINING_Contract) >= parseInt(withdraw_balance)) {
          props.setIsLoading(true)
          new web3.eth.Contract(MINING_ABI, MINING_CONTRCT).methods.withdraw().send({ from: account }).then(()=>  props.setIsLoading(false)).catch(()=>  props.setIsLoading(false));
        } else {
          props.setIsLoading(false)
          Swal.fire(
            'Warning!',
            'Unsufficent fund Try after some time',
            'error'
          )
        }


      } else {
        Swal.fire(
          'Error',
          'Not Participated!',
          'error'
        )

      }
    } else {
      Swal.fire(
        'Warning',
        'Connect to the Wallet',
        'warning'
      )
    }
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let MiningData = [
    { title: "Total output", value: "74,349,432.00 USDT" },
    { title: "Current Hashrate", value: "145.35(PH/s)" },
    { title: "Participant", value: "51,152" },
    { title: "User Revenue", value: "74,349,432.00 USDT" },
  ];
  return (
    <div className="md:max-w-[600px] w-full mx-auto">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "#fff" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Withdraw" {...a11yProps(0)} />
            {/* <Tab label="Record" {...a11yProps(1)} /> */}
          </Tabs>
        </Box>
        <TabPanel
          style={{ width: "100%" }}
          className="mb-5 rounded-md shadow-lg shadow-black-500/50"
          value={value}
          index={0}
        >
          <div className="w-full text-left">
            <h3 className="mb-2 text-2xl font-semibold">Withdraw</h3>
            {/* <form class="w-full max-w-sm"> */}
            <div className="flex items-center py-2 border-b border-teal-500">
              {/* <input
                  className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
                  type="text"
                  placeholder="0"
                ></input> */}
              <button
                className="flex-shrink-0 px-2 py-1 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700"
                type="button"
                onClick={Withdraw}
              >
                Withdraw
              </button>
            </div>
            {/* </form> */}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="">
            <div className="flex gap-2">
              <span className="flex-1">Time</span>
              <span className="flex-1">Quantity</span>
              <span className="flex-1">Status</span>
            </div>
            <div className="flex gap-2 my-3  text-[#a1a1b2]">
              <span className="flex-1 ">07-2-13</span>
              <span className="flex-1 ">0.45666</span>
              <span className="flex-1 text-emerald-500">Success</span>
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
