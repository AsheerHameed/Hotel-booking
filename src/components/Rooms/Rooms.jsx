import { Box, Typography, CardMedia, Grid } from "@mui/material";
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

  const [isActiveAll, setActiveAll] = useState(true);
  const ToggleClassAll = () => {
    setActiveAll(true);
    setActiveDoubleBedrooms(false);
    setActiveHomeStay(false);
    setActiveOthers(false);
  };

  const [isActiveDoubleBedrooms, setActiveDoubleBedrooms] = useState(false);
  const ToggleClassDoubleBedrooms = () => {
    setActiveAll(false);
    setActiveDoubleBedrooms(true);
    setActiveHomeStay(false);
    setActiveOthers(false);
  };

  const [isActiveHomeStay, setActiveHomeStay] = useState(false);
  const ToggleClassHomeStay = () => {
    setActiveAll(false);
    setActiveDoubleBedrooms(false);
    setActiveHomeStay(true);
    setActiveOthers(false);
  };

  const [isActiveOthers, setActiveOthers] = useState(false);
  const ToggleClassOthers = () => {
    setActiveAll(false);
    setActiveDoubleBedrooms(false);
    setActiveHomeStay(false);
    setActiveOthers(true);
  };

  return (
    <Box className="section__padding" id="rooms" style={{marginBottom:"30px"}}>
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
          Our Rooms Gallery
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
          className={isActiveAll ? "active" : null}
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "12px", lg: "16px" },
            fontWeight: "600",
            color: "#6b6b6b",
            cursor: "pointer",
          }}
          onClick={() => {
            setItems(Data);
            ToggleClassAll();
          }}
        >
          All Images
        </Typography>

        <Typography
          className={isActiveDoubleBedrooms ? "active" : null}
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "12px", lg: "16px" },
            fontWeight: "600",
            color: "#6b6b6b",
            cursor: "pointer",
          }}
          onClick={() => {
            filterItem("Double Bedroom");
            ToggleClassDoubleBedrooms();
          }}
        >
          Double Bedrooms
        </Typography>

        <Typography
          className={isActiveHomeStay ? "active" : null}
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "12px", lg: "16px" },
            fontWeight: "600",
            color: "#6b6b6b",
            cursor: "pointer",
          }}
          onClick={() => {
            filterItem("Home stay");
            ToggleClassHomeStay();
          }}
        >
          Home stay
        </Typography>

        <Typography
          className={isActiveOthers ? "active" : null}
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "12px", lg: "16px" },
            fontWeight: "600",
            color: "#6b6b6b",
            cursor: "pointer",
          }}
          onClick={() => {
            filterItem("Others");
            ToggleClassOthers();
          }}
        >
          Others
        </Typography>
      </Box>

      <Grid container spacing={2} mx={"auto"}>
        {items.map((element) => {
          // const { image, category, name } = element;
          return (
            <Grid Box xs={12} md={6} lg={4}>
              <Box
                className="image__container"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: { xs: "start" },
                }}
              >
                <Box className="photo-gallery">
                  <CardMedia
                    className="photo-gallery-images"
                    component="img"
                    sx={{
                      height: { lg: "420px", xs: "270px" },
                      width: { lg: "420px", xs: "270px" },
                      borderRadius: "28px",
                      padding: "12px",
                    }}
                    image={element?.image}
                  />
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
export default Product;
