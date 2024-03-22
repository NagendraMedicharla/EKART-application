import React from "react";
import { Snackbar, Alert } from "@mui/material";

const CustomSnackbar = (props) => {
  return (
    <Snackbar
      open={props?.open}
      autoHideDuration={2000}
      onClose={props?.onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={props?.onClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%", mt: "40px" }}
      >
        {props?.message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
