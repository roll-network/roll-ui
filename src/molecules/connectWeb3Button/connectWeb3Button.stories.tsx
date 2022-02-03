import { useState } from "react";
import { ConnectWeb3Button, HandleWeb3Connect } from ".";
import { titleBuilder } from "../../../.storybook/utils";
import { withThemeProvider } from "../../providers/theme/withProvider";
import {
  CHAIN_ID_ROPSTEN,
  SUPPORTED_CHAIN_IDS,
  Web3Connectors,
} from "../../web3Connectors";
import { ConnectWeb3Options } from "../connectWeb3Options";

const conf = {
  title: titleBuilder.molecules("ConnectWeb3Button"),
  component: ConnectWeb3Button,
};

const connectors = new Web3Connectors(
  "",
  "",
  CHAIN_ID_ROPSTEN,
  SUPPORTED_CHAIN_IDS
);

export const Default = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [handleConnect, setHandleConnect] =
    useState<HandleWeb3Connect | null>(null);

  const fallback = () => alert("handle connect is null");

  console.log("handle connect: ", handleConnect);

  return withThemeProvider(
    <div>
      <ConnectWeb3Button
        onConnect={(hc) => {
          setHandleConnect(() => hc);
          setShowOptions(true);
        }}
        connectors={connectors}
      />
      {showOptions && (
        <ConnectWeb3Options
          onClose={() => setShowOptions(!showOptions)}
          connectors={connectors}
          handleConnect={handleConnect || fallback}
        />
      )}
    </div>
  );
};

export default conf;
