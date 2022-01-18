import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";

const CalcDisplay = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: 4,
        boxShadow: 3,
        color: theme.palette.text.primary,
        marginBottom: 3,
        minHeight: 150,
        p: 4
      }}
    >
      display
    </Box>
  )
}

export default CalcDisplay
