import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FAQ() {
  const [expanded, setExpanded] = React.useState("panel1");
  let FAQData = [
    {
      title: "How do i need to join?",
      content:
        " Participating in non-destructive and non-guaranteed liquidity mining requires payment of miner fees to receive the replacement gold coupons, and the wallet address only needs to be claimed once. Automatically open mining permissions after success.",
      panel: "panel1",
    },
    {
      title: "How do i withdraw money?",
      content:
        "You can convert the currency generated every day into USDT, and then initiate a withdrawal. USDT withdrawals will be automatically sent to the wallet address you added to the node, other addresses are not supported.", panel: "panel2",
    },
    {
      title: "How to calculate income?",
      content:
        "When you join successfully, the smart contract starts to calculate your address through the node and start to calculate the revenue.", panel: "panel3",
    },

    {
      title: "What are the extra gains?",
      content:
        "When you have enough mining per day and keep it for enough time continuously, the mining pool will have a lot of rewards. For more details, please contact online customer service.", panel: "panel4",
    },
  ];
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="md:max-w-[600px] w-full mx-auto mb-10">
      {FAQData.map((item, key) => (
        <Accordion
          className="bg-[#fff] rounded-md"
          expanded={expanded === item.panel}
          onChange={handleChange(item.panel)}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            className="shadow-lg shadow-black-500/50"
          >
            <div className="text-xl font-bold">{item.title}</div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="text-left text-[#a1a1b3]">{item.content}</div>
          </AccordionDetails>
        </Accordion>
      ))}
      <Accordion
        className="bg-[#fff] rounded-md"
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="shadow-lg shadow-black-500/50"
        >
          <div className="text-xl font-bold">{"What is the yield percentage rate?"}</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="text-left text-[#a1a1b3]">
            <span>VIP1: 10-99 yield rate 1% USDT</span><br></br>
            <span>VIP2: 100-999 yield rate 2% USDT</span>  <br></br>
            <span>VIP3: 1000-4999 yield rate 3% USDT</span><br></br>
            <span>VIP4: 5000-9999 yield rate 4% USDT</span><br></br>
            <span>VIP5: 10000-19999 yield rate 5% USDT</span><br></br>
            <span>VIP6: 20000-49999 yield rate 6% USDT</span><br></br>
            <span>VIP7: 50000-99999 yield rate 7% USDT</span><br></br>
            <span>VIP8: 100000-Above yield rate 8% USDT</span><br></br>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
