import { InjectedConnector } from "@web3-react/injected-connector";
import { PortisConnector } from "@web3-react/portis-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const CHAIN_ID_MAIN_NET = 1;
export const CHAIN_ID_ROPSTEN = 3;

export const SUPPORTED_CHAIN_IDS = [CHAIN_ID_MAIN_NET, CHAIN_ID_ROPSTEN];

export class Web3Connectors {
  supportedChainIDs: number[];
  defaultChainID: number;

  injected: InjectedConnector;
  formatic: FortmaticConnector;
  walletConnect: WalletConnectConnector;
  portis: PortisConnector;

  constructor(
    fortmaticApiKey: string,
    portisDappID: string,
    defaultChainID: number = CHAIN_ID_MAIN_NET,
    supportedChainIDs: number[] = SUPPORTED_CHAIN_IDS
  ) {
    this.supportedChainIDs = supportedChainIDs;
    this.defaultChainID = defaultChainID;

    this.injected = new InjectedConnector({
      supportedChainIds: this.supportedChainIDs,
    });

    this.formatic = new FortmaticConnector({
      apiKey: fortmaticApiKey,
      chainId: this.defaultChainID,
    });

    this.walletConnect = new WalletConnectConnector({
      supportedChainIds: this.supportedChainIDs,
    });

    this.portis = new PortisConnector({
      dAppId: portisDappID,
      networks: this.supportedChainIDs,
    });
  }
}
