import { Footer } from ".";
import { titleBuilder } from "../../../.storybook/utils";

const storyConfig = {
  title: titleBuilder.molecules("Footer"),
  component: Footer,
};

export const Default = () => {
  return (
    <div>
      <Footer />
    </div>
  );
};
export default storyConfig;
