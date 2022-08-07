import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundColor: string;
      checkedColor: string;
      primaryColor: string;
      secondaryColor: string;
    };
  }
}
