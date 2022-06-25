import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      bg: string;
      text: string;
      purple_light: string;
      purple_dark: string;
    };
  }
}
