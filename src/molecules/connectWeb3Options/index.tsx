import { AbstractConnector } from "@web3-react/abstract-connector";
import { Web3Connectors } from "../../web3Connectors";
import { ReactComponent as MetaMaskLogo } from "../../assets/svg/metamaskLogo.svg";
import { ReactComponent as WalletConnectLogo } from "../../assets/svg/walletConnectLogo.svg";
import { ReactComponent as CoinBaseLogo } from "../../assets/svg/coinbaseWalletLogo.svg";
import { ReactComponent as FortmaticLogo } from "../../assets/svg/fortmaticLogo.svg";
import { ReactComponent as PortisLogo } from "../../assets/svg/portisLogo.svg";
import { SubHeader, Body } from "../../atoms/typography";
import { text, useTheme } from "../..";
import { useState } from "react";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { useMemo } from "@storybook/addons";
import StyledLink from "../../atoms/styledLink";

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

type Props = {
  handleConnect: (connector: AbstractConnector) => void;
  connectors: Web3Connectors;
  onSelect?: () => void;
  onClose?: () => void;
};

export const ConnectWeb3Options = ({
  handleConnect,
  connectors,
  onSelect,
  onClose,
}: Props) => {
  const theme = useTheme();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const walletOptions = useMemo(
    () => buildWalletOptions(connectors),
    [connectors]
  );

  const _select = (connector: AbstractConnector, idx: number) => {
    setSelectedIdx(idx);
    handleConnect(connector);
    onSelect && onSelect();
  };

  return (
    <div style={{ minWidth: 400 }}>
      <div className="flex justify-between p-4">
        <SubHeader weight="bold">Connect Wallet</SubHeader>
        <Close className="cursor-pointer" onClick={onClose} />
      </div>
      <div
        className="p-4 flex flex-col items-center"
        style={{ backgroundColor: theme.backgroundPage }}
      >
        {walletOptions.map((o, i) => (
          <ConnectWalletOption
            key={i}
            active={i === selectedIdx}
            title={o.title}
            logo={o.logo}
            onClick={() => _select(o.connector, i)}
          />
        ))}
        <div className="w-4/5 flex justify-center">
          <Body style={text.center}>
            By connecting, you accept the{" "}
            <StyledLink title="Terms of Service" url="https://google.com" /> for
            using the Roll protocol
          </Body>
        </div>
      </div>
    </div>
  );
};

type OptionProps = {
  title: string;
  logo: JSX.Element;
  active?: boolean;
  onClick?: () => void;
};

const ConnectWalletOption = ({ title, logo, active, onClick }: OptionProps) => {
  const theme = useTheme();
  return (
    <div
      onClick={onClick}
      className="flex flex-row justify-between rounded p-4 mb-4 w-full"
      style={{
        borderWidth: 1,
        borderColor: active ? theme.highlight : undefined,
      }}
    >
      <SubHeader>{title}</SubHeader>
      {logo}
    </div>
  );
};
