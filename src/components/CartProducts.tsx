import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import {
  handleInc,
  handleDec,
  handleRemProduct
} from "../redux/reducers/cartSlice";

const CartProducts = ({ cartData }) => {
  const dispatch = useDispatch();
  // console.log(cartData);

  const handleDecQty = (cartId) => {
    dispatch(handleDec(cartId));
  };

  const handleIncQty = (cartId) => {
    dispatch(handleInc(cartId));
  };

  const handleDelProduct = (cartId) => {
    dispatch(handleRemProduct(cartId));
  };

  return (
    <Box
      sx={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "30px"
      }}
    >
      {cartData?.map((data, index) => {
        return (
          <Grid
          key={index}
            container
            spacing={1}
            sx={{
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              minHeight: "120px"
            }}
          >
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "80px",
                width: "80px",
                "& img": {
                  height: "100%",
                  objectFit: "cover"
                }
              }}
            >
              <img src={data?.productData?.thumbnail} alt="" />
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography sx={{ color: "#373737", fontSize: "14px" }}>
                  {data?.productData?.title}
                </Typography>
                <Typography sx={{ color: "gray", fontSize: "12px" }}>
                  {data?.productData?.description}
                </Typography>
                <Stack direction="row" spacing={1} alignItems={"center"}>
                  <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                    ${data?.productData?.price * data?.quantity}
                  </Typography>
                  <Typography
                    sx={{ color: "green", fontWeight: "600", fontSize: "14px" }}
                  >
                    {data?.productData?.discountPercentage}% off
                  </Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent="center"
              >
                <Button
                  data-testid="decBtn"
                  onClick={() => handleDecQty(data.cartId)}
                  sx={{
                    backgroundColor: "#1976d2",
                    minWidth: "30px",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#66a5e3"
                    }
                  }}
                  disabled={data?.quantity === 1 ? true : false}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Typography data-testid="qty" sx={{ width: "30px", textAlign: "center" }}>
                  {data?.quantity}
                </Typography>
                <Button
                  data-testid="incBtn"
                  onClick={() => handleIncQty(data.cartId)}
                  sx={{
                    backgroundColor: "#1976d2",
                    minWidth: "30px",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#66a5e3"
                    }
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={1} sx={{ paddingLeft: "0px" }}>
              <DeleteIcon
                onClick={() => handleDelProduct(data.cartId)}
                sx={{
                  color: "#a90000",
                  cursor: "pointer",
                  "&:hover": {
                    color: "red"
                  }
                }}
              />
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default CartProducts;
