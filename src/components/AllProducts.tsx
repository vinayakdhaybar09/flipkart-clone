import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Box, Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { AllProductsTypes } from "../types/index";

const AllProducts = () => {
  const getAllproducts = async () => {
    return await axios.get("https://dummyjson.com/products");
  };

  const { data } = useQuery(["all-products"], getAllproducts);

  // console.log(data?.data?.products);

  if (!data) {
    return null;
  }

  return (
    <Box sx={{ margin: "60px" }}>
      <Typography variant={"h5"}>Trending Products</Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          // gap: "10px"
          justifyContent: "space-between",
          rowGap: "30px",
          marginTop: "30px"
        }}
      >
        {data?.data?.products?.map((data: AllProductsTypes) => {
          return (
            <Box key={data?.id}>
              <ProductCard data={data} />
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default AllProducts;
