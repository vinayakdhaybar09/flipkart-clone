import { Box } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        padding: "20px",
        borderRadius: "10px"
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px"
        }}
        src="https://storiesflistgv2.blob.core.windows.net/stories/2017/09/BBD-Storify_mainbanner-1024x600.jpg"
        alt="heroImg"
      />
    </Box>
  );
};

export default Hero;
