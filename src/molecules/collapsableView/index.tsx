import { Body, containers, Header, margins, SubHeader, Surface } from "../.."
import { ReactComponent as ExpandIcon } from "../../assets/svg/ExpandIcon.svg"
import { ReactComponent as CollapseIcon } from "../../assets/svg/CollapseIcon.svg"

type Props = {
    title: string,
    isExpanded: boolean
    toggle: () => void
}

export const CollapsableView = ({title, isExpanded, toggle}: Props) => {
    return(
    <Surface style={[containers.fullWidth]}>
        <div className="flex flex-col m-8">
            <div className="flex justify-between items-center h-8">
                <Header color="#000000" weight="bold">{title}</Header>
                <button className="w-8 h-8 rounded-full bg-blue-600" onClick={toggle}>
                   { isExpanded ? <ExpandIcon /> : <CollapseIcon /> }
                </button>
            </div>
            {isExpanded && <div className="flex flex-col mt-16">
                <SubHeader>
                Roll Staking is an easy way for anyone to stake the tokens they hold or create staking opportunities for others. Creators who have their own social tokens can use Roll Staking to create liquidity mining campaigns, and people who hold social tokens can decide to stake their tokens and receive rewards for doing so.
                </SubHeader>
                <SubHeader style={[margins.mv24]}>
                Roll Staking is a web3 feature that supports any and all ERC20 tokens, regardless of whether they were minted on Roll or not.
                </SubHeader>
                <SubHeader>
                As a creator, you can use our staking product to create a campaign and incentivize your community to provide liquidity for your token in any token pair you’d like. You do by rewarding them with tokens proportional to the size and the duration of the liquidity they provide.
                </SubHeader>
                <SubHeader style={[margins.mv24]}>
                As a token holder, when you stake your tokens, you’re essentially locking them in a smart contract in exchange for a percentage return based on how many tokens you’ve staked and for how long.
                </SubHeader>
                </div>
}
        </div>
    </Surface>
    )
}
