import * as Typography from ".";
import { titleBuilder } from "../../../.storybook/utils";

const storyConfig = {
  title: titleBuilder.atoms("Typography"),
  component: Typography.TypographyBase,
};

export const SubCaption = () => (
  <Typography.SubCaption>SubCaption</Typography.SubCaption>
);
export const Caption = () => <Typography.Caption>Caption</Typography.Caption>;
export const Body = () => <Typography.Body>Body</Typography.Body>;
export const SubHeader = () => (
  <Typography.SubHeader>SubHeader</Typography.SubHeader>
);
export const Header = () => <Typography.Header>Header</Typography.Header>;
export const LargeHeader = () => (
  <Typography.LargeHeader>LargeHeader</Typography.LargeHeader>
);
export const Title = () => <Typography.Title>Title</Typography.Title>;
export const LargeTitle = () => (
  <Typography.LargeTitle>LargeTitle</Typography.LargeTitle>
);

export default storyConfig;
