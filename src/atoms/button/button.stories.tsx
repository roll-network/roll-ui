import { Button } from ".";
import { titleBuilder } from "../../../.storybook/utils";

const storyConfig = {
  title: titleBuilder.atoms("Button"),
  component: Button,
};

export const Primary = () => (
  <Button
    title="Click Me"
    type="primary"
    onPress={() => console.log("hello")}
  />
);

export const Secondary = () => (
  <Button
    title="Click Me"
    type="secondary"
    onPress={() => console.log("hello")}
  />
);

export const Disabled = () => (
  <Button
    title="Click Me"
    type="disabled"
    onPress={() => console.log("hello")}
  />
);

export const Minimal = () => (
  <Button
    title="Click Me"
    type="minimal"
    onPress={() => console.log("hello")}
  />
);

export default storyConfig;
