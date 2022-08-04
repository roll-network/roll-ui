import { ToolTip } from ".";
// import { Body, TypographyBase } from "..";
import { titleBuilder } from "../../../.storybook/utils";

const storyConfig = {
  title: titleBuilder.atoms("Tooltip"),
  component: ToolTip,
};

export const Primary = () => (
  <div>
    <ToolTip title="I am a tooltip">
      <p>Hello world</p>
    </ToolTip>
  </div>
);

export const Typography = () => (
  <div>
    <ToolTip title="I am a tooltip">
      <p>Hello world</p>
    </ToolTip>
  </div>
);
export const Membership = () => (
  <div>
    <ToolTip title="I am a tooltipTiers are membership levels that you can access with lots of tokens. Claim lots below to become a member of this community." isMembership>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <p style={{ width: "fit-content" }}>Hello world</p>
      </div>
    </ToolTip>
  </div>
);

export default storyConfig;
