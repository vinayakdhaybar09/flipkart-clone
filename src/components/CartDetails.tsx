import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import GppGoodIcon from "@mui/icons-material/GppGood";

const CartProducts = ({ cartData }) => {
  return (
    <Box>
      <Box sx={{ margin: "40px 0", backgroundColor: "#fff" }}>
        <Typography
          sx={{
            p: "10px 20px",
            fontSize: "14px",
            borderBottom: "1px solid gray"
          }}
        >
          PRICE DETAILS
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ p: "10px 20px" }}
        >
          <Typography sx={{ fontWeight: "500" }}>
            Price ({cartData.length} item)
          </Typography>
          <Typography>$521</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ p: "10px 20px" }}
        >
          <Typography>Discount</Typography>
          <Typography sx={{ color: "green" }}>- $21</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ p: "10px 20px" }}
        >
          <Typography>Delivery Charges</Typography>
          <Typography sx={{ color: "green" }}>Free</Typography>
        </Stack>
        <Divider sx={{ width: "90%", margin: "auto" }} />
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ p: "10px 20px", fontWeight: "600" }}
        >
          <Typography sx={{ fontWeight: "600" }}>Total Amount</Typography>
          <Typography sx={{ fontWeight: "600" }}>$521</Typography>
        </Stack>
        <Typography sx={{ p: "10px 20px", color: "green" }}>
          You will save ₹2,510 on this order
        </Typography>
      </Box>
      <Button
        sx={{
          backgroundColor: "#fb641b",
          width: "100%",
          py: "16px",
          "&:hover": {
            backgroundColor: "#ff5400"
          }
        }}
      >
        <Typography sx={{ fontWeight: "600", color: "#fff" }}>
          PLACE ORDER
        </Typography>
      </Button>
      <Stack
        direction="row"
        sx={{ p: "20px 20px" }}
        alignItems="center"
        spacing={1}
      >
        <GppGoodIcon sx={{ color: "gray" }} fontSize="large" />
        <Typography sx={{ fontSize: "14px", color: "gray" }}>
          Safe and Secure Payments.Easy returns.100% Authentic products.
        </Typography>
      </Stack>
    </Box>
  );
};

export default CartProducts;
