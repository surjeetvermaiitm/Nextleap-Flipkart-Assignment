/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { productJSON } from "../assets/data";
import { Box, Typography, TextField, FormControl } from "@mui/material";
import IphoneCard from "./IphoneCard";
import Loader from "./Loder";

const FlipkartPage = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  async function fetchData() {
    try {
      let response = await fetch(
        "https://sandbox.nextleap.app/products/fetch",
        {
          method: "GET",
        }
      );
      // console.log(response);
      if (response.ok) {
        let data = await response.json();
        setStatus("success");
        setProducts(data?.productCard);
        return data;
      }
    } catch (error) {
      console.log(error);
      return new Error("data could not be fetched, error: " + error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const filteredIphones = products?.filter((iphone) =>
      iphone.title?.toLowerCase().includes(searchText?.toLowerCase())
    );
    setProducts(filteredIphones);
  }, [searchText]);

  return (
    <Box>
      <Box
        sx={{ bgcolor: "blue" }}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        color="white"
        alignItems="center"
        gap={4}
      >
        <Typography fontWeight="bold">
          <em>Flipkart</em>
        </Typography>
        <FormControl
          sx={{ gap: "0.5rem", width: "50rem", bgcolor: "tertiary.light" }}
        >
          <TextField
            required
            fullWidth
            id="query-id"
            placeholder="Search "
            size="small"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </FormControl>
        <Typography fontWeight="bold">Become a Seller</Typography>
        <Typography fontWeight="bold">Cart</Typography>
      </Box>
      {status === "loading" ? (
        <Loader />
      ) : (
        <>
          {products?.map((iphone) => {
            return <IphoneCard iphone={iphone} />;
          })}
        </>
      )}
    </Box>
  );
};

export default FlipkartPage;
