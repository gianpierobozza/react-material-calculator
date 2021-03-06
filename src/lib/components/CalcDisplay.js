import * as React from "react"
import { useTheme } from "@mui/material/styles"
import { Box, Grid, Stack } from "@mui/material"
import "./display.css"

const CalcDisplay = ({ operation, history }) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: 4,
        boxShadow: 3,
        marginBottom: 3,
        minHeight: 150,
        p: 3,
      }}
    >
      <Box
        sx={{
          color: theme.palette.text.primary,
          flexGrow: 1,
          height: 150,
        }}
      >
        <Grid
          container
          direction="column-reverse"
          justifyContent="flex-start"
          alignItems="flex-end"
        >
          <Stack
            sx={{ 
              width: "100%",
              height: "150px",
              overflowY: "auto",
              paddingRight: "2px"
            }}
            className="display-stack"
            direction="column-reverse"
            justifyContent="flex-start"
            alignItems="flex-end"
          >
            <Box component="div" sx={{ width: "100%", textAlign: "end", fontSize: "1.5rem" }}>{operation}</Box>
            {history.map((line, index) => {
              return (
                <Box key={index} component="div" sx={{ width: "100%", textAlign: "end", fontSize: "1rem" }}>{line}</Box>
              )
            })}
          </Stack>
        </Grid>
      </Box>
    </Box>
  )
}

export default CalcDisplay
