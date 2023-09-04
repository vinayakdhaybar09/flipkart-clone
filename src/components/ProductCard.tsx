import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import { Link } from "react-router-dom";
// import { AllProductsTypes } from "../types/index"

export interface AllProductsTypes {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface TypesData {
  data: AllProductsTypes;
}

const ProductCard: React.FC<TypesData> = ({ data }) => {
  return (
    <Link
      to={`/product-details/${data?.id}`}
      style={{ textDecoration: "none" }}
    >
      <Box width="260px" sx={{ cursor: "pointer" }}>
        <Card>
          <CardMedia
            sx={{ height: 140 }}
            image={data?.images[0]}
            title="green iguana"
          />
          <Stack sx={{ p: "10px", gap: "10px" }}>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Typography>{data?.title.slice(0, 20)}</Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                {data?.rating}
                <StarIcon fontSize="small" sx={{ color: "#FF9529" }} />
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {data?.description.slice(0, 50)}...
            </Typography>
            <Stack direction="row" spacing={2} alignItems={"center"}>
              <Typography variant="h6">{data?.price} $ </Typography>
              <Typography
                sx={{ color: "green", fontWeight: "500", fontSize: "14px" }}
              >
                {data?.discountPercentage}% off
              </Typography>
            </Stack>
          </Stack>
        </Card>
      </Box>
    </Link>
  );
};

export default ProductCard;
