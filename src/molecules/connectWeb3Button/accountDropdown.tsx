import { AbstractConnector } from "@web3-react/abstract-connector";
import { Body, margins, useTheme } from "../..";
import { shortenAddress } from "../../utils/web3";
import { ReactComponent as Copy } from "../../assets/svg/copy.svg";
import { ReactComponent as WalletIcon } from "../../assets/svg/wallet.svg";
import { ReactComponent as LinkIcon } from "../../assets/svg/link.svg";
export type HandleWeb3Connect = (c: AbstractConnector) => void;

type Props = {
  address: string;
};

export const AccountDropdwn = ({ address }: Props) => {
  const theme = useTheme();
  return (
    <div className="p-4">
      <Body color={theme.textMuted}>Connected with MetaMask</Body>
      <div className="flex flex-row bg-gray-200 p-2 rounded-lg my-2">
        <Body weight="bold" style={margins.mr8}>
          {shortenAddress(address)}
        </Body>
        <Copy />
      </div>
      <div className="flex flex-row">
        <LinkOption icon={<WalletIcon />} title="Switch Accounts" />
        <LinkOption icon={<LinkIcon />} title="View on Etherscan" />
      </div>
    </div>
  );
};

type LinkProps = {
  icon: React.ReactElement;
  title: string;
};

const LinkOption = ({ icon, title }: LinkProps) => {
  const theme = useTheme();
  return (
    <div className="flex flex-row items-center mr-4">
      {icon}
      <Body style={margins.ml4} color={theme.highlight}>
        {title}
      </Body>
    </div>
  );
};
