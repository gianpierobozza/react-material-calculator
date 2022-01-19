import * as React from "react"
import find from "lodash/find"
import includes from "lodash/includes"
import replace from "lodash/replace"
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

const keysDictionary = [
  { key: "7", value: "7" },
  { key: "8", value: "8" },
  { key: "9", value: "9" },
  { key: "&divide;", value: "/" },
  { key: "&#9100;", value: "undo" },
  { key: "C", value: "C" },
  { key: "4", value: "4" },
  { key: "5", value: "5" },
  { key: "6", value: "6" },
  { key: "&#215;", value: "*" },
  { key: "(", value: "(" },
  { key: ")", value: ")" },
  { key: "1", value: "1" },
  { key: "2", value: "2" },
  { key: "3", value: "3" },
  { key: "-", value: "-" },
  { key: "x&#178;", value: "pow" },
  { key: "&#8730;", value: "sqrt" },
  { key: "0", value: "0" },
  { key: ".", value: "." },
  { key: "%", value: "%" },
  { key: "+", value: "+" },
  { key: "=", value: "=" }
]

function isNumeric(str) {
  if (typeof str != "string") return false
  return !isNaN(str) && !isNaN(parseFloat(str))
}

const CalcButton = ({ button, operation, setOperation, history, setHistory }) => {
  
  const handleButtonClick = (key) => {
    var newValue = find(keysDictionary, { "key": key }).value
    if (newValue === "undo") {
      if (operation.length > 1) {
        setOperation(operation.substring(0, operation.length - 1))
      } else {
        setOperation("0")
      }
    } else if (newValue === "=") {
      const result = math.evaluate(replace(operation, "÷", "/"))
      setHistory(history => reverse([...history, operation + " = " + result]));
      setOperation(result.toString())
    } else if (newValue === "C") {
      setOperation("0")
    } else {
      if (newValue === "/") {
        newValue = "÷"
      }
      if (
        (includes(operators, operation.slice(-1)) && isNumeric(newValue)) ||
        (isNumeric(operation))
      ) {
        if (operation !== "0") {
          setOperation(operation + newValue)
        } else {
          setOperation(newValue)
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
