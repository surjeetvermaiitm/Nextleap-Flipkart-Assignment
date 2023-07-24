import React, { useState } from "react";
import { Typography, Box, Checkbox, Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function IphoneCard({ iphone }) {
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [isAddToCompare, setIsAddToCompare] = useState(false);

  return (
    <Box
      sx={{ p: 4 }}
      display="flex"
      flexDirection="column"
      onClick={() => {
        window.open(iphone?.productPageLink?.url, "_blank");
      }}
    >
      <Box display="flex" flexDirecton="row" justifyContent="space-around">
        <Box display="flex" flexDirection="row" gap={5}>
          <Box
            component="img"
            height="140px"
            src={iphone?.image?.url}
            alt="img"
          />
          <Box display="flex" flexDirection="column">
            <Typography fontWeight="bold">{iphone?.title}</Typography>
            <Box display="flex" flexDirection="row">
              <Box
                display="flex"
                flexDirection="row"
                sx={{ color: "tertiary.light", bgcolor: "green.main", pl: 0.3 }}
              >
                <Typography>{iphone?.ratings?.overallRating}</Typography>
                <StarIcon />
              </Box>
              <Typography sx={{ color: "tertiary.lightGrey3", ml: 2 }}>
                {iphone?.ratings?.totalRatingsNum} Ratings &{" "}
                {iphone?.ratings?.totalReviewsNum} Reviews
              </Typography>
            </Box>
            <ul>
              {iphone?.featuresList?.map((description, index) => {
                return <li>{description}</li>;
              })}
            </ul>
          </Box>
        </Box>
        <Box>
          <Box display="flex" flexDirection="row">
            <CurrencyRupeeIcon />
            <Typography fontWeight="bold">
              {iphone?.price?.finalPrice}
            </Typography>
          </Box>
          <del>
            <Box display="flex" flexDirection="row" sx={{ fontSize: "12px" }}>
              <CurrencyRupeeIcon
                sx={{ color: "tertiary.lightGrey3" }}
                size="small"
              />
              <Typography sx={{ color: "tertiary.lightGrey3" }}>
                {iphone?.price?.mrp}
              </Typography>
            </Box>
          </del>
          <Typography fontWeight="bold" fontSize={12}>
            {iphone?.freeDelivery ? "free delivery" : ""}
          </Typography>
          <Box display="flex" flexDirection="row">
            <Typography fontSize={14}>Upto</Typography>
            <CurrencyRupeeIcon />
            <Typography fontWeight="bold">
              {iphone?.price?.finalPrice}
            </Typography>
            <Typography sx={{ ml: 1 }}>Off on Exchange</Typography>
          </Box>
          <Typography sx={{ color: "green.main", ":hover": {} }}>
            Bank Offers
          </Typography>
        </Box>
      </Box>
      <Box sx={{ ml: "10%" }}>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Checkbox label="Add to Cart" />
          <Typography>Add to Cart</Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Checkbox label="Add to compare" />
          <Typography>Add to Compare</Typography>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
}

export default IphoneCard;
