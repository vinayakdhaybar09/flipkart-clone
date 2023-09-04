import { Box, CircularProgress, Grid, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";

const ProductDetails = () => {
  const params = useParams();

  // console.log(params);
  const fetchProductData = () => {
    return axios.get(`https://dummyjson.com/products/${params?.id}`);
  };

  const { data, isLoading } = useQuery(["product-data"], fetchProductData);

  // console.log(data?.data);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "90vh",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <Grid container spacing={2} sx={{ padding: "30px" }}>
        <Grid item xs={5}>
          <ProductImage productData={data?.data}  />
        </Grid>
        <Grid item xs={7}>
          <ProductInfo productData={data?.data} />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;
