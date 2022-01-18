import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Grid } from "@mui/material";

const Item = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: theme.palette.success.main,
  color: theme.palette.primary.contrastText,
  fontWeight: "bold",
  fontSize: "2rem",
  padding: theme.spacing(1),
  textAlign: "center",
  width: "100%"
}));

const CalcButton = ({ button }) => {
  return (
    <Grid item xs={button.dimension}>
      <Box sx={{ boxShadow: 3 }}>
        <Item
          sx={button.style ? button.style : {}}
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
