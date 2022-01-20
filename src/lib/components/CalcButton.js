import * as React from "react"
import includes from "lodash/includes"
import reverse from "lodash/reverse"
import { create, all } from 'mathjs'
import { styled } from "@mui/material/styles"
import { Box, Button, Grid } from "@mui/material"

const config = {}
const math = create(all, config)

const Item = styled(Button)(({ theme, operation, setOperation }) => ({
  ...theme.typography.body2,
  backgroundColor: theme.palette.success.main,
  color: theme.palette.primary.contrastText,
  fontWeight: "bold",
  fontSize: "2rem",
  padding: theme.spacing(1),
  textAlign: "center",
  width: "100%"
}));

const operators = ["+", "-", "÷", "*", "pow", "sqrt", "%"]

function isNumeric(str) {
  if (typeof str != "string") return false
  return !isNaN(str) && !isNaN(parseFloat(str))
}

const CalcButton = ({ button, operation, setOperation, history, setHistory }) => {
  
  const handleButtonClick = (value) => {
    if (value === "⎌") {
      if (operation.length > 1) {
        setOperation(operation.substring(0, operation.length - 1))
      } else {
        setOperation("0")
      }
    } else if (value === "=") {
      const result = math.evaluate(operation).toString()
      setHistory(history => reverse([...history, operation + " = " + result]));
      setOperation(result)
    } else if (value === "C") {
      setOperation("0")
    } else {
      if (
        (includes(operators, operation.slice(-1)) && isNumeric(value)) ||
        (isNumeric(operation))
      ) {
        if (operation !== "0") {
          setOperation(operation + value)
        } else {
          setOperation(value)
        }
      }
    }
  }

  return (
    <Grid item xs={button.dimension}>
      <Box sx={{ boxShadow: 3 }}>
        <Item
          sx={button.style ? button.style : {}}
          onClick={() => handleButtonClick(button.value)}
        >
          <span dangerouslySetInnerHTML={{
            __html: button.value
          }} />
        </Item>
      </Box>
    </Grid>
  )
}

export default CalcButton
