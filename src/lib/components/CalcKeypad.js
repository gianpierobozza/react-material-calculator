import * as React from "react"
import { useTheme } from "@mui/material/styles"
import { Box, Grid } from "@mui/material"
import CalcButton from "./CalcButton"

const CalcKeypad = ({ operation, setOperation, history, setHistory }) => {
	const theme = useTheme();
	const buttons = [
		{ value: "7", dimension: 2 },
		{ value: "8", dimension: 2 },
		{ value: "9", dimension: 2 },
		{ value: "/", dimension: 2 },
		{ value: "⎌", dimension: 2 },
		{ value: "C", dimension: 2 },
		{ value: "4", dimension: 2 },
		{ value: "5", dimension: 2 },
		{ value: "6", dimension: 2 },
		{ value: "*", dimension: 2 },
		{ value: "(", dimension: 2 },
		{ value: ")", dimension: 2 },
		{ value: "1", dimension: 2 },
		{ value: "2", dimension: 2 },
		{ value: "3", dimension: 2 },
		{ value: "-", dimension: 2 },
		{ value: "x²", dimension: 2 },
		{ value: "√", dimension: 2 },
		{ value: "0", dimension: 2 },
		{ value: ".", dimension: 2 },
		{ value: "%", dimension: 2 },
		{ value: "+", dimension: 2 },
		{
			value: "=", dimension: 4, style: {
				backgroundColor: theme.palette.warning.main,
				borderColor: theme.palette.warning.dark,
				color: theme.palette.text.primary
			}
		},
	]

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={3}>
				{buttons.map((button, index) => {
					return (
						<CalcButton 
							button={button}
							operation={operation}
							setOperation={setOperation}
							history={history}
        					setHistory={setHistory}
							key={index}
						/>
					)
				})}
			</Grid>
		</Box>
	);
}

export default CalcKeypad;
