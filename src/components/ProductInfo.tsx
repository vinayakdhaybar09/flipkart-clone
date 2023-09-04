import { Box, Typography, styled, Button, Stack } from "@mui/material";

import StarIcon from "@mui/icons-material/Star";

const ProductInfo = ({ productData }) => {
  return (
    <Stack spacing={1}>
      <Typography sx={{ fontWeight: "600" }} data-testid="ptoductTitle">{productData?.title}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          backgroundColor: "green",
          color: "#fff",
          width: "fit-content",
          p: "0.5% 1%",
          borderRadius: "4px"
        }}
      >
        <Typography sx={{ fontSize: "14px" }}>{productData?.rating}</Typography>
        <StarIcon sx={{ fontSize: "14px" }} />
      </Box>
      <Typography sx={{ color: "gray", fontSize: "12px" }}>
        {productData?.description}
      </Typography>
      <Stack direction={"row"} alignItems="center" spacing={2}>
        <Typography sx={{ fontWeight: "600", fontSize: "22px" }}  data-testid="productPrice">
          $ {productData?.price}
        </Typography>
        <Typography
          sx={{ fontSize: "12px", color: "green", fontWeight: "600" }}
        >
          {productData?.discountPercentage}% off
        </Typography>
      </Stack>
      <Typography sx={{ mt: "20PX" }}>Product Details</Typography>
    </Stack>
  );
};

export default ProductInfo;
