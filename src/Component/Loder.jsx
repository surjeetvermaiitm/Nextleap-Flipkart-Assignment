import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Variants() {
  return (
    <Stack
      spacing={2}
      margin="auto"
      marginLeft={2}
      sx={{ width: { xxs: "90%", xs: "90%", sm: "95%", lg: "95%" } }}
    >
      <Skeleton variant="rectangular" height={150} />
      <Skeleton variant="rectangular" height={150} />
      <Skeleton variant="rectangular" height={150} />
      <Skeleton variant="rectangular" height={150} />
      <Skeleton variant="rectangular" height={150} />
      <Skeleton variant="rectangular" height={150} />
      <Skeleton variant="rectangular" height={150} />
    </Stack>
  );
}
