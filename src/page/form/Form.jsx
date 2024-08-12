// import React from 'react';
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";


const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const phoneRegExp =
  // /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0,9]{2,4})[ -]?)*?[0,9]{1,4}$/;
  /^\+?[1-9]\d{1,14}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const Form = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    console.log("Done");

    handleClick();
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >

          <Header  title={"CREATE USER"} subTiitle={"Create a New User Profile"} />
        
      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName ? "هـذا الحقـل إجبـاري & اقـل شئ 3 حـروف" : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            errors.lastName ? "هـذا الحقـل إجبـاري & اقـل شئ 3 حـروف" : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={errors.email ? "مـن فضـلك يجـب ان يكـون إيميـل" : null}
        {...register("email", { required: true, pattern: regEmail })}
        label="Email "
        variant="filled"
      />
      <TextField
        error={Boolean(errors.ContactNumber)}
        helperText={
          errors.ContactNumber ? "مـن فضـلك يجـب ان يكـون رقـم هـاتـف" : null
        }
        {...register("ContactNumber", {
          required: true,
          pattern: phoneRegExp,
          minLength: 9,
        })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />

      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
        //   helperText="Please select your currency"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "center" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account Created Successfully.
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
