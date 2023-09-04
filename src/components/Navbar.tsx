import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartData = useSelector((state) => state.cart.myCart);

  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: "0", width: "100%" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ height: "20px", px: 1 }}>
            <img
              src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textDecoration: "none" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Flipkart
            </Link>
          </Typography>
          <Box
            sx={{
              position: "relative"
            }}
          >
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "white"
              }}
            >
              <ShoppingCartIcon />
            </Link>
            <Box
              sx={{
                backgroundColor: "#fb641b",
                borderRadius: "10px",
                position: "absolute",
                top: "-12px",
                right: "-10px",
                px: "4px"
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px"
                }}
              >
                {cartData?.length}
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
