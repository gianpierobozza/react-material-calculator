import * as React from "react"
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

function isNumeric(str) {
  if (typeof str != "string") return false
  return !isNaN(str) && !isNaN(parseFloat(str))
}

const CalcButton = ({ button, operation, setOperation, history, setHistory }) => {

  const handleButtonClick = (value) => {
    switch (value) {
      case "⎌":
        if (operation.length > 1) {
          setOperation(operation.substring(0, operation.length - 1))
        } else {
          setOperation("0")
        }
        break
      case "=":
        const result = math.evaluate(operation).toString()
        setHistory(history => reverse([...history, operation + " = " + result]));
        setOperation(result)
        break
      case "C":
        setOperation("0")
        break
      case "+":
      case "-":
      case "/":
      case "*":
        if (isNumeric(operation.slice(-1)) || operation.slice(-1) === ")") {
          setOperation(operation + value)
        }
        break
      case "(":
        if (!isNumeric(operation.slice(-1))) {
          setOperation(operation + value)
        } else if (operation === "0") {
          setOperation(value)
        }
        break
      case ")":
        if (isNumeric(operation.slice(-1))) {
          setOperation(operation + value)
        } else if (operation === "0") {
          setOperation(value)
        }
        break
      case ".": {
        const reversedOperation = operation.split("").reverse().join("")
        const firstBinaryOperatorIndex = reversedOperation.search(`[/+/-/*//]`);
        const lastToken = reversedOperation.substring(0, firstBinaryOperatorIndex)
        if (isNumeric(lastToken) && lastToken.indexOf(".") === -1) {
          setOperation(operation + value)
        }
        break
      }
      default:
        if (operation !== "0") {
          setOperation(operation + value)
        } else {
          setOperation(value)
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
