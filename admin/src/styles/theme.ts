import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  spacing: (multiplier: number): string | number => {
    return multiplier * 8
  }
})