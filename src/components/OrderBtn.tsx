import { Box, Button, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cartSlice";

const OrderBtn = ({ productData }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        cartId: Date.now(),
        quantity: 1,
        productData
      })
    );
  };

  return (
    <Grid container spacing={2} mt={0.1}>
      <Grid item xs={6}>
        <Button
          onClick={handleAddToCart}
          sx={{
            backgroundColor: "#ff9f00",
            color: "#fff",
            width: "100%",
            py: "10px",
            gap: "10px",
            "&:hover": {
              backgroundColor: "#dd8a00"
            }
          }}
        >
          <ShoppingCartIcon fontSize="small" />
          <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
            ADD TO CART
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          sx={{
            backgroundColor: "#fb641b",
            color: "#fff",
            width: "100%",
            py: "10px",
            gap: "10px",
            "&:hover": {
              backgroundColor: "#ff5300"
            }
          }}
        >
          <FlashOnIcon fontSize="small" />
          <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
            BUY NOW
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default OrderBtn;
