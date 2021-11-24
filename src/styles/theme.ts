import { ghostWhite, white, grey } from ".";

export type Theme = {
  backgroundPage: string;
  backgroundModal: string;
  backgroundHeader: string;
  textMuted: string;
};

export const lightTheme: Theme = {
  backgroundPage: ghostWhite,
  backgroundModal: white,
  backgroundHeader: white,
  textMuted: grey,
};
