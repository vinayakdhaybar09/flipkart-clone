import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import OrderBtn from "../components/OrderBtn";

const ProductImage = ({ productData }: any) => {
  // console.log("ProductData = ", productData);
  const [mainImg, setMainImg] = useState(productData?.thumbnail);
  // console.log("ProductImage = ", mainImg);

  const handleSetMainImg = (data) => {
    setMainImg(data);
  };

  useEffect(() => {
    setMainImg(productData?.thumbnail);
  }, [productData]);

  return (
    <>
      <Grid
        container
        sx={{
          border: "1px solid lightgray",
          borderRadius: "4px",
          height: "440px",
        }}
      >
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
                  border: mainImg === data ? "2px solid #1976d2" : null,
                }}
              />
            );
          })}
        </Grid>
        <Grid item xs={10} sx={{ p: "4px", height: "100%" }}>
          <img
          data-testid="thumbnailImg"
            src={mainImg}
            alt="productMainImg"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          {/* <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: mainImg,
                height: 300
                // style:{
                //   height: "100%",
                //   width: "100%",
                //   borderRadius: "4px",
                //   objectFit: "cover"
                // }
              },
              largeImage: {
                src: mainImg,
                width: 3000,
                height: 3000,
                style: {
                  height: "100%",
                  width: "100%",
                  borderRadius: "4px",
                  objectFit: "cover"
                }
              }
            }}
          /> */}
        </Grid>
      </Grid>
      {/* </Box> */}
      <Box>
        <OrderBtn productData={productData} />
      </Box>
    </>
  );
};

export default ProductImage;
