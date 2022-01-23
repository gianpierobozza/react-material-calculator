import * as React from "react"
import find from "lodash/find"
import { useTheme } from "@mui/material/styles"
import { Box, Grid, Switch } from "@mui/material"
import CalcButton from "./CalcButton"

const CalcKeypad = ({ operation, setOperation, history, setHistory }) => {
	const [captureKeyboard, setCaptureKeyboard] = React.useState(false);
	const theme = useTheme();
	const buttons = [
		{ value: "7", dimension: 2, keypad: "7" },
		{ value: "8", dimension: 2, keypad: "8" },
		{ value: "9", dimension: 2, keypad: "9" },
		{ value: "/", dimension: 2, keypad: "/" },
		{ value: "⎌", dimension: 2, keypad: "Backspace" },
		{ value: "C", dimension: 2, keypad: "Delete" },
		{ value: "4", dimension: 2, keypad: "4" },
		{ value: "5", dimension: 2, keypad: "5" },
		{ value: "6", dimension: 2, keypad: "6" },
		{ value: "*", dimension: 2, keypad: "*" },
		{ value: "(", dimension: 2, keypad: "(" },
		{ value: ")", dimension: 2, keypad: ")" },
		{ value: "1", dimension: 2, keypad: "1" },
		{ value: "2", dimension: 2, keypad: "2" },
		{ value: "3", dimension: 2, keypad: "3" },
		{ value: "-", dimension: 2, keypad: "-" },
		{ value: "x²", dimension: 2, keypad: "^" },
		{ value: "√", dimension: 2, keypad: "s" },
		{ value: "0", dimension: 2, keypad: "0" },
		{ value: ".", dimension: 2, keypad: "." },
		{ value: "%", dimension: 2, keypad: "%" },
		{ value: "+", dimension: 2, keypad: "+" },
		{
			value: "=", dimension: 4, keypad: "Enter", style: {
				backgroundColor: theme.palette.warning.main,
				borderColor: theme.palette.warning.dark,
				color: theme.palette.text.primary
			}
		},
	]

	const handleChange = (event) => {
    setCaptureKeyboard(event.target.checked);
		if (event.target.checked) {
			document.onkeyup = (event) => {
				if (find(buttons, ['keypad', event.key]) !== undefined) {
					document.getElementById(`keypad-${event.key}`).click()
				}
			}
		} else {
			document.onkeyup = () => {}
		}
  };

	const switchLabel = { inputProps: { 'aria-label': 'Capture keyboard' } };

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					Capture keyboard <Switch checked={captureKeyboard} onChange={handleChange}size="small" {...switchLabel} />
				</Grid>
				{buttons.map((button, index) => {
					return (
						<CalcButton 
							button={button}
							operation={operation}
							setOperation={setOperation}
							history={history}
        			setHistory={setHistory}
							key={index}
							captureKeyboard={captureKeyboard}
							setCaptureKeyboard={setCaptureKeyboard}
						/>
					)
				})}
			</Grid>
		</Box>
	);
}

export default CalcKeypad;
