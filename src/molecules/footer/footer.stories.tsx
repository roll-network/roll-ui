import { Footer } from ".";
import { titleBuilder } from "../../../.storybook/utils";

const storyConfig = {
  title: titleBuilder.molecules("Footer"),
  component: Footer,
};

export const Default = () => <Footer />;

export default storyConfig;
