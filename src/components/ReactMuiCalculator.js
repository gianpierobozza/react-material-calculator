import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Button } from "@mui/material";

const Item = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "2rem",
  width: "100%",
  color: theme.palette.text.primary,
  border: "1px solid",
  borderColor: theme.palette.primary.light,
  boxShadow: 2
}));

const ReactMuiCalculator = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Item>7</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>8</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>9</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>&divide;</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>&#9100;</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>C</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>4</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>5</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>6</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>&#215;</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>(</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>)</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>-</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>x&#178;</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>&#8730;</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>0</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>.</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>%</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>+</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>=</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ReactMuiCalculator;
