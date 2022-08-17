import * as Typography from ".";
import { titleBuilder, fromTemplate } from "../../../.storybook/utils";

const storyConfig = {
  title: titleBuilder.atoms("Typography"),
  component: Typography.TypographyBase,
};

const getTemplate =
  (
    componentName:
      | "SubCaption"
      | "Caption"
      | "Body"
      | "SubHeader"
      | "Header"
      | "LargeHeader"
      | "Title"
      | "LargeTitle"
  ) =>
  (props: Typography.TypographyBaseProps) => {
    const Component = Typography[componentName];

    return <Component {...props} />;
  };

export const SubCaption = fromTemplate(getTemplate("SubCaption"), {
  children: "SubCaption",
});
export const Caption = fromTemplate(getTemplate("Caption"), {
  children: "Caption",
});
export const Body = fromTemplate(getTemplate("Body"), { children: "Body" });
export const SubHeader = fromTemplate(getTemplate("SubHeader"), {
  children: "SubHeader",
});
export const Header = fromTemplate(getTemplate("Header"), {
  children: "Header",
});
export const LargeHeader = fromTemplate(getTemplate("LargeHeader"), {
  children: "LargeHeader",
});
export const Title = fromTemplate(getTemplate("Title"), { children: "Title" });
export const LargeTitle = fromTemplate(getTemplate("LargeTitle"), {
  children: "LargeTitle",
});

export default storyConfig;
