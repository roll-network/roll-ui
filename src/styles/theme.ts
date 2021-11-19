import { ghostWhite, white } from ".";

export type Theme = {
  backgroundPage: string;
  backgroundModal: string;
  backgroundHeader: string;
};

export const lightTheme: Theme = {
  backgroundPage: ghostWhite,
  backgroundModal: white,
  backgroundHeader: white,
};
