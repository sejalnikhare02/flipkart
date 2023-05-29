import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FilterSection from "../comp/Filtersection/FilterSection";
import Sort from "../comp/Sort/Sort";
import ProductList from "../comp/ProductList/ProductList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Ui = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, margin: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <FilterSection />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <h6> Showing 12 results for "Shoes" </h6>
              <Sort />
            </Item>

            <Item style={{ marginTop: 10 }}>
              <ProductList />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Ui;
