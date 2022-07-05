import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
const injected = new InjectedConnector({
  supportedChainIds: [97,1,3],
});
const walletconnect = new WalletConnectConnector({
  rpcUrl: `https://ropsten.infura.io/v3/1da2a4aeb9a949d586c8bcbf4a43b8b6`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});
export const connectors = {
  injected: injected,
  walletconnect:injected
};
