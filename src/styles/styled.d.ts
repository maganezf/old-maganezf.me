import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    borderProfileColor: string;
    backgroundColor: string;
    iconsTextColor: string;
    headerFooterColor: string;
    selectionBackgroundColor: string;
    selectionTextColor: string;
    shadowColor: string;
  }
}
