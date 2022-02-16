import { useState } from "react";
import { ConnectWeb3Button } from ".";
import { titleBuilder } from "../../../.storybook/utils";
import { withThemeProvider } from "../../providers/theme/withProvider";

import { ConnectWeb3Options } from "../connectWeb3Options";
import { withWeb3Provider } from "../../providers/web3";
import { useWeb3ConnectorsCtx } from "../../providers/web3Connectors";

const conf = {
  title: titleBuilder.molecules("ConnectWeb3Button"),
  component: ConnectWeb3Button,
};

export const Default = () => {
  return withWeb3Provider(withThemeProvider(<StoryComponent />));
};

const StoryComponent = () => {
  const { connectors, handleConnect } = useWeb3ConnectorsCtx();
  const [showOptions, setShowOptions] = useState(false);

  const fallback = () => alert("handle connect is null");

  if (!connectors) return <p>no connectors initialized...</p>;

  return (
    <div>
      <ConnectWeb3Button onPress={() => setShowOptions(true)} />
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
