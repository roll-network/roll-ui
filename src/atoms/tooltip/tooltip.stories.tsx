import { ToolTip } from ".";
import { Body, TypographyBase } from "..";
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
      <Body>Hello world</Body>
    </ToolTip>
  </div>
);

export default storyConfig;
