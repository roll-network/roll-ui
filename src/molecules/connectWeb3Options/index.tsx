import { AbstractConnector } from "@web3-react/abstract-connector";
import { Web3Connectors } from "../../web3Connectors";
import { ReactComponent as MetaMaskLogo } from "../../assets/svg/metamaskLogo.svg";
import { ReactComponent as WalletConnectLogo } from "../../assets/svg/walletConnectLogo.svg";
import { ReactComponent as CoinBaseLogo } from "../../assets/svg/coinbaseWalletLogo.svg";
import { ReactComponent as FortmaticLogo } from "../../assets/svg/fortmaticLogo.svg";
import { ReactComponent as PortisLogo } from "../../assets/svg/portisLogo.svg";

type WalletOption = {
  title: string;
  logo: JSX.Element;
  connector: AbstractConnector;
};

const buildWalletOptions = (connectors: Web3Connectors): WalletOption[] => [
  {
    title: "Metamask",
    logo: <MetaMaskLogo />,
    connector: connectors.injected,
  },
  {
    title: "WalletConnect",
    logo: <WalletConnectLogo />,
    connector: connectors.walletConnect,
  },
  {
    // TODO configure coinbase connector
    title: "Coinbase Wallet",
    logo: <CoinBaseLogo />,
    connector: connectors.injected,
  },
  {
    title: "Fortmatic",
    logo: <FortmaticLogo />,
    connector: connectors.formatic,
  },
  {
    title: "Portis",
    logo: <PortisLogo />,
    connector: connectors.portis,
  },
];
