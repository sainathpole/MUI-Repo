import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

const companies = [
  { name: "WEB DESIEN DEVLOPMENT", logo: require("../images/img1.jpg") },
  { name: "AI", logo: require("../images/img2.jpg") },
  { name: "AWS", logo: require("../images/img3.jpg") },
  { name: "MACHINE LEARNING", logo: require("../images/img4.jpg") },
];

const FeaturedCompanies = () => {
  return (
    <Box p={4} bgcolor="lavender">
      <Typography variant="h6" gutterBottom>
        Featured
      </Typography>
      <Grid container spacing={3}>
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={3} key={company.name}>
            <Paper
              elevation={3}
              style={{ padding: "16px", textAlign: "center" }}
            >
              <Box
                component="img"
                src={company.logo}
                alt={company.name}
                width="100%"
                height="100px"
              />
              <Typography variant="subtitle1" gutterBottom>
                {company.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedCompanies;
