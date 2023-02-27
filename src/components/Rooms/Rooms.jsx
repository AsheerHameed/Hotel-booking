import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import "./rooms.css";
import Data from "./data";



function Product() {
  const [items, setItems] = useState(Data);
  const filterItem = (category) => {
    const updatedItems = Data.filter((currentElement) => {
      return currentElement.category === category;
    });
    setItems(updatedItems);
  };

  const [isActiveAllProduct, setActiveAllProduct] = useState(true);
  const ToggleClassAllProduct = () => {
    setActiveAllProduct(true);
    setActiveCoats(false);
    setActiveSkirt(false);
    setActiveShort(false);
    setActiveTshirt(false);
    setActiveDress(false);
  };

  const [isActiveCoats, setActiveCoats] = useState(false);
  const ToggleClassCoats = () => {
    setActiveAllProduct(false);
    setActiveCoats(true);
    setActiveSkirt(false);
    setActiveShort(false);
    setActiveTshirt(false);
    setActiveDress(false);
  };

  const [isActiveDress, setActiveDress] = useState(false);
  const ToggleClassDress = () => {
    setActiveAllProduct(false);
    setActiveCoats(false);
    setActiveDress(true);
    setActiveSkirt(false);
    setActiveShort(false);
    setActiveTshirt(false);
  };

  const [isActiveSkirt, setActiveSkirt] = useState(false);
  const ToggleClassSkirt = () => {
    setActiveAllProduct(false);
    setActiveCoats(false);
    setActiveSkirt(true);
    setActiveShort(false);
    setActiveTshirt(false);
    setActiveDress(false);
  };
  const [isActiveShort, setActiveShort] = useState(false);
  const ToggleClassShort = () => {
    setActiveAllProduct(false);
    setActiveCoats(false);
    setActiveSkirt(false);
    setActiveShort(true);
    setActiveDress(false);
    setActiveTshirt(false);
  };
  const [isActiveTshirt, setActiveTshirt] = useState(false);
  const ToggleClassTshirt = () => {
    setActiveAllProduct(false);
    setActiveCoats(false);
    setActiveSkirt(false);
    setActiveShort(false);
    setActiveTshirt(true);
    setActiveDress(false);
  };
  return (
    <Box
      className="section__padding"
      sx={{
        borderRadius: "8px",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "800",
            textAlign: "center",
            color: "white",
            fontSize: { lg: "48px", xs: "20px" },
            paddingBottom: "40px",
            paddingTop: "20px",
          }}
        >
          Our Latest
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingLeft: { lg: "120px", xs: "12px" },
          paddingRight: { lg: "100px", xs: "2px" },
          paddingTop: "20px",
          paddingBottom: "40px",
        }}
      >
        <Typography
          className={isActiveAllProduct ? "active" : null}
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "14px", lg: "16px" },
            fontWeight: "600",
            color: "#6b6b6b",
            cursor: "pointer",
          }}
          onClick={() => {
            setItems(Data);
            ToggleClassAllProduct();
          }}
        >
          All Rooms
        </Typography>

        <Typography
          className={isActiveCoats ? "active" : null}
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "14px", lg: "16px" },
            fontWeight: "600",
            color: "#6b6b6b",
            cursor: "pointer",
          }}
          onClick={() => {
            filterItem("Jackets");
            ToggleClassCoats();
          }}
        >
          Double Bedrooms
        </Typography>

        <Typography
          className={isActiveDress ? "active" : null}
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "14px", lg: "16px" },
            fontWeight: "600",
            color: "#6b6b6b",
            cursor: "pointer",
          }}
          onClick={() => {
            filterItem("Dresses");
            ToggleClassDress();
          }}
        >
          Home stay
        </Typography>

        <Typography
          className={isActiveShort ? "active" : null}
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "14px", lg: "16px" },
            fontWeight: "600",
            color: "#6b6b6b",
            cursor: "pointer",
          }}
          onClick={() => {
            filterItem("Shorts");
            ToggleClassShort();
          }}
        >
          Others
        </Typography>
      </Box>
      <Grid container spacing={4} ml={2}>
        {items.map((element) => {
          // const { image, category, name } = element;
          return (
            <Grid item xs={12} lg={4} md={8}>
              <Box
                width="240px"
                sx={{
                  marginLeft: { xs: "start" },
                }}
              >
                <Card
                  sx={{
                    height: { xs: "360px", lg: "" },
                    width: { xs: "210px", lg: "360px" },
                    borderRadius: "15px",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: { lg: "340px", xs: "270px" } }}
                    image={element?.image}
                  />
                  <CardContent>
                    <Box>
                      <Typography
                        variant="span"
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { lg: "12px", xs: "8px" },
                          display: "flex",
                          justifyContent: "flex-start",
                          color: "#6b6b6b",
                          textAlign: "left",
                        }}
                      >
                        Category : {element?.category}
                      </Typography>
                      <Typography
                        sx={{
                          color: "var(--color-bg)",
                          fontFamily: "Poppins",
                          fontSize: { lg: "24px", xs: "16px" },
                          fontWeight: "bolder",
                          display: "flex",
                          justifyContent: "flex-start",
                          textAlign: "left",
                        }}
                      >
                        {element?.name}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <div className="findOut">
        <button role="button">Call us Now!</button>
      </div>
    </Box>
  );
}
export default Product;
