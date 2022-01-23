import * as React from "react"
import { create, all } from 'mathjs'
import { styled } from "@mui/material/styles"
import { Box, Button, Grid, Tooltip } from "@mui/material"

const math = create(all, {})

const Item = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: theme.palette.success.main,
  color: theme.palette.primary.contrastText,
  fontWeight: "bold",
  fontSize: "2rem",
  padding: theme.spacing(1),
  textAlign: "center",
  textTransform: "none",
  width: "100%"
}));

function isNumeric(str) {
  if (typeof str != "string") return false
  return !isNaN(str) && !isNaN(parseFloat(str))
}

const CalcButton = ({ button, operation, setOperation, setHistory, captureKeyboard }) => {

  const handleButtonClick = (value) => {
    switch (value) {
      case "=":
        try {
          const result = math.evaluate(operation).toString()
          setHistory(history => [operation + " = " + result, ...history]);
          setOperation(result)
        } catch (error) {
          setHistory(history => ["invalid operation", ...history]);
          setOperation("0")
        }
        break
      case "⎌":
        if (operation.length > 1) {
          setOperation(operation.substring(0, operation.length - 1))
        } else {
          setOperation("0")
        }
        break
      case "C":
        setOperation("0")
        break
      case "+":
      case "-":
      case "/":
      case "*":
      case "x²":
      case "%":
        if (isNumeric(operation.slice(-1)) || operation.slice(-1) === ")" || operation.slice(-1) === "%") {
          var newValue = ""
          if (value === "x²") {
            newValue = "^2"
          } else {
            newValue = value
          }
          if (operation !== "0") {
            setOperation(operation + newValue)
          } else if (newValue === "+" || newValue === "-") {
            setOperation(newValue)
          }
        }
        break
      case "√":
        if (!isNumeric(operation.slice(-1))) {
          if (operation !== "0") {
            setOperation(operation + "sqrt(")
          } else {
            setOperation("sqrt(")
          }
        }
        break
      case "(":
        if (!isNumeric(operation.slice(-1)) && operation.slice(-1) !== "%") {
          setOperation(operation + value)
        } else if (operation === "0") {
          setOperation(value)
        }
        break
      case ")":
        if ((isNumeric(operation.slice(-1)) && operation !== "0") || operation.slice(-1) === "%") {
          setOperation(operation + value)
        }
        break
      case ".": {
        const reversedOperation = operation.split("").reverse().join("")
        const firstBinaryOperatorIndex = reversedOperation.search(`[/+/-/*//]`);
        const lastToken = reversedOperation.substring(0, firstBinaryOperatorIndex)
        if ((isNumeric(lastToken) && lastToken.indexOf(".") === -1) || firstBinaryOperatorIndex === -1) {
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

  const innerBox = (
    <Box sx={{ boxShadow: 3 }}>
      <Item
        sx={button.style ? button.style : {}}
        id={`keypad-${button.keypad}`}
        onClick={() => handleButtonClick(button.value)}
      >
        <span dangerouslySetInnerHTML={{
          __html: button.value
        }} />
      </Item>
    </Box>
  )

  return (
    <Grid item xs={button.dimension}>
      {captureKeyboard ?
        (<Tooltip followCursor title={`[ ${button.keypad} ]`}>
          {innerBox}
        </Tooltip>) :
        innerBox}
    </Grid>
  )
}

export default CalcButton
