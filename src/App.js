import * as React from "react"
import ReactMuiCalculator from "./lib/components/ReactMuiCalculator"

import { Box } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = () => {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
        m: 4,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <ReactMuiCalculator minWidth={400} maxWidth={500} />
    </Box>
  )
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
