import { ConnectWeb3Options } from ".";
import { titleBuilder } from "../../../.storybook/utils";
import { withThemeProvider } from "../../providers/theme/withProvider";
import {
  CHAIN_ID_ROPSTEN,
  SUPPORTED_CHAIN_IDS,
  Web3Connectors,
} from "../../web3Connectors";

const conf = {
  title: titleBuilder.molecules("ConnectWeb3Options"),
  component: ConnectWeb3Options,
};

export const Default = () =>
  withThemeProvider(
    <ConnectWeb3Options
      connectors={
        new Web3Connectors("", "", CHAIN_ID_ROPSTEN, SUPPORTED_CHAIN_IDS)
      }
      handleConnect={() => console.log("handle connect")}
      onClose={() => alert("on close event")}
      onSelect={() => alert("on select event")}
    />
  );

export default conf;
