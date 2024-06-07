import React from "react";
import { Box, Typography, Grid, Paper, Rating } from "@mui/material";

const MainContent = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" color="navy blue" bgcolor="silver" fontFamily="folks" fontSize="45px"  gutterBottom>
        Wellcome to our website
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Portfolio Companies
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "16px", textAlign: "center" }}>
            <Typography variant="h5" color="blue" >Cognizant</Typography>
            <Rating name="read-only" value={4} readOnly />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "16px", textAlign: "center" }}>
            <Typography variant="h5" color="blue">google</Typography>
            <Rating name="read-only" value={5} readOnly />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "16px", textAlign: "center" }}>
            <Typography variant="h5" color="blue">infosys</Typography>
            <Rating name="read-only" value={3} readOnly />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
