import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Button } from "@mui/material";

const Item = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "2rem",
  width: "100%",
  border: "1px solid",
  borderColor: theme.palette.primary.light,
  boxShadow: 2
}));

const CalcButton = ({ button }) => {
  return (
    <Grid item xs={button.dimension}>
      <Item
        sx={button.style ? button.style : {}}
      >
        <span dangerouslySetInnerHTML={{
          __html: button.value
        }} />
      </Item>
    </Grid>
  )
}

export default CalcButton
