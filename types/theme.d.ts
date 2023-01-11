import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions,
} from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface Palette extends MuiPallete {
    neutral: {
      dark: string;
      main: string;
      light: string;
    };
  }

  interface PaletteOptions extends MuiPaletteOptions {
    neutral?: {
      dark: string;
      main: string;
      light: string;
    };
  }
}
