import * as React from "react"
import { Box } from "@mui/material"
import CalcKeypad from "./CalcKeypad"
import CalcDisplay from './CalcDisplay'

const ReactMuiCalculator = ({ minWidth, maxWidth }) => {
  const [operation, setOperation] = React.useState("0")
  const [history, setHistory] = React.useState([])

  const minCalcWidth = minWidth < 400 ? 400 : minWidth
  const maxCalcWidth = maxWidth > 1000 ? 1000 : maxWidth

  return (
    <Box 
      sx={{ 
        backgroundColor: "lightgray",
        borderRadius: 4,
        boxShadow: 3,
        minWidth: minCalcWidth,
        maxWidth: maxCalcWidth,
        p: 4,
      }}
    >
      <CalcDisplay
        operation={operation}
        setOperation={setOperation}
        history={history}
        setHistory={setHistory}
      />
      <CalcKeypad
        operation={operation}
        setOperation={setOperation}
        history={history}
        setHistory={setHistory}
      />
    </Box>
  );
}

export default ReactMuiCalculator;
