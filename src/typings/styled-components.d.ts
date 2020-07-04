import { defaultTheme } from "../theme/theme";

type ThemeInterface = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
