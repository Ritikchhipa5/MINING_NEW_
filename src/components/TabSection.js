import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { MINING_CONTRCT, USDT_CONTRACT } from "../Config/contract";
import { USDT_ABI } from "../Config/USDTAbi";
import { MINING_ABI } from "../Config/MINING_ABI";
import moment from 'moment';
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

export default function TabSection() {
  const [value, setValue] = React.useState(0);
  const { active, library, account } = useWeb3React();
  const [Data, setData] = React.useState(null);
  const [DataSet, setDataSet] = React.useState(null);
  const [AccountData, setAccountData] = React.useState(null);
  let web3 = new Web3("https://ropsten.infura.io/v3/1da2a4aeb9a949d586c8bcbf4a43b8b6");
  React.useEffect(() => {
    if (active) {
      web3 = new Web3(library.provider);
      getAccountData();
      getData();
    }

  }, [active])


  async function getData() {
    let data = await new web3.eth.Contract(MINING_ABI, MINING_CONTRCT).methods.getWithdrawable(account).call();
    let data2 = await new web3.eth.Contract(USDT_ABI, USDT_CONTRACT).methods.balanceOf(account).call();
    setData({ Withdrawable: parseInt(data)/Math.pow(10,18), Balance: parseInt(data2)/Math.pow(10,18)});
    getAccountData();
  }


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  async function getAccountData() {
    let data = await new web3.eth.Contract(USDT_ABI, USDT_CONTRACT).methods.balanceOf(account).call();
    let dataset = await new web3.eth.Contract(MINING_ABI, MINING_CONTRCT).methods.dataset(account).call();
    console.log(dataset);
    setDataSet({ TotalParticipation:dataset.totalParticipation/Math.pow(10,18)})
    setAccountData(data);
  }
  let AccountValue = [
    {
      title: "Total output",
      value:
        Data !== null
          ? parseFloat(Data.TotalOutput).toFixed(3) + " USDT"
          : " 0 USDT",
    },
    {
      title: "Withdrawable",
      value:
        Data !== null
          ? parseFloat(Data.Withdrawable).toFixed(3) + " USDT"
          : " 0 USDT",
    },
    { title: "Hash Aid", value: "0.0 USDT" },
    {
      title: "Total Participant",
      value:
        DataSet !== null
          ? parseFloat(DataSet.TotalParticipation).toFixed(3) + " USDT"
          : " 0 USDT",
    },
  ]
  let MiningData = [
    { title: "Total output", value: "77,896,416.60 USDT" },
    { title: "Current Hashrate", value: "145.35(PH/s)" },
    { title: "Participant", value: "51,152" },
    { title: "User Earn", value: "77,896,416.60 USDT"},
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
            <Tab label="Mining Pool" {...a11yProps(0)} />
            <Tab label="Account" {...a11yProps(1)} />
          </Tabs>
        </Box>
      
        <TabPanel value={value} index={0}>
        <div className="w-full text-left">
            <h3 className="mb-2 text-2xl font-semibold">Pool Data</h3>
            <div className="flex justify-between mb-4 text-xl">

          </div>
            <div>
              {MiningData.map((item, key) => (
                <div className="flex justify-between mb-4 text-sm md:text-xl">
                  <span className="text-[#a1a1b3]">{item.title}</span>
                  <span className="text-[#2082fe] font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel
          style={{ width: "100%" }}
          className="mb-5 rounded-md shadow-lg shadow-black-500/50"
          value={value}
          index={1}
        >
        <div className="w-full text-left">
            <h3 className="mb-2 text-2xl font-semibold">Pool Data</h3>
            <div className="flex justify-between mb-4 text-sm md:text-xl">
              <span className="text-[#a1a1b3]">Wallet Balance</span>
              <span className="text-[#2082fe] font-bold">
                {parseFloat(AccountData / Math.pow(10, 18)).toFixed(3)} USDT
              </span>
            </div>
            <div>
              {AccountValue.map((item, key) => (
                <div className="flex justify-between mb-4 text-sm md:text-xl">
                  <span className="text-[#a1a1b3]">{item.title}</span>
                  <span className="text-[#2082fe] font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
