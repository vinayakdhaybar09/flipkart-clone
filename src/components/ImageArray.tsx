import { useState } from "react";
import { Box, Grid } from "@mui/material";

const ImageArray = () => {
  const [mainImg, setMainImg] = useState(productData.thumbnail);

  const handleSetMainImg = (data) => {
    setMainImg(data);
  };
  return (
    <Grid
      item
      xs={2}
      sx={{ borderRight: "1px solid lightgray", p: "4px", height: "100%" }}
    >
      {productData?.images?.map((data, index) => {
        return (
          <img
            key={index}
            onMouseEnter={() => handleSetMainImg(data)}
            src={data}
            alt="product"
            style={{
              height: "80px",
              width: "100%",
              borderRadius: "4px",
              objectFit: "cover",
              border: mainImg === data ? "2px solid #1976d2" : null
            }}
          />
        );
      })}
    </Grid>
  );
};

export default ImageArray;
