import { Box, Button, Grid, Typography } from "@mui/material";
import CartProducts from "../components/CartProducts";
import CartDetails from "../components/CartDetails";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.myCart);
  // console.log(" cart = ", cartData);

  return (
    <Box>
      <Navbar />
      {cartData.length != 0 ? (
        <Grid
          container
          spacing={0}
          sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", px: "40px" }}
        >
          <Grid item xs={8}>
            <CartProducts cartData={cartData} />
          </Grid>
          <Grid item xs={4} sx={{ position: "fixed", right: "40px" }}>
            <CartDetails cartData={cartData} />
          </Grid>
        </Grid>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            mt: "30px",
            gap: "10px",
            flexDirection: "column",
            "& img": {
              width: "24%"
            }
          }}
        >
          <img
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt="cart empty"
          />
          <Typography
            sx={{
              color: "gray",
              fontWeight: "600",
              fontSize: "20px"
            }}
          >
            Ooops..! Cart is empty.
          </Typography>
          <Link to="/" style={{ width: "300px" }}>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#fb641b",
                width: "100%",
                fontWeight: "500",
                fontSize: "18px",
                textTransform: "unset",
                mt: "10px",
                "&:hover": {
                  backgroundColor: "#ff5300"
                }
              }}
            >
              Shop
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
