import { Colors, colors } from "@/ui/theme/colors";
import Fonts from "@/ui/theme/fonts";

type ThemeType = {
  colors: Colors;
  font: string;
};

const theme: ThemeType = {
  colors,
  font: Fonts,
};

export default theme;

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
