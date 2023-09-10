import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";

import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FieldValues, useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";

import Image from "../assets/webchat-background.jpg";
import useAuth from "../auth/useAuth";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useLogin from "../hooks/useLogin";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(5, { message: "Password might be at least 5 charecters." }),
});

type FormData = z.infer<typeof schema>;

const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { login, errMsg, setUserData } = useLogin();

  const onSubmit = async (data: FieldValues) => {
    setUserData({ email: "a12@gmail.com", password: "a1234" });
    login(); // Call the login function
    console.log("Submiting login ", data);
  };

  // const onSubmit = async (data: LoginFormInput) => {
  //   try {
  //     const user = await login(data.username, data.password);
  //     authStore.login(user);
  //     history.push('/dashboard');
  //   } catch (error) {
  //     // Handle login error
  //     alert('Login failed. Please check your credentials.');
  //   }
  // };

  const { currentUser } = useAuth();
  // const { tasks, dispatch } = useTasks();

  if (currentUser.isAuthenticated) return <Navigate to="/" replace={true} />;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Image})`,
            // "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 3,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Typography component="h3" variant="h5">
              {errMsg}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                {...register("email")}
              />
              {errors.email && (
                <Typography sx={{ color: "red", width: "100%" }}>
                  {errors.email.message}
                </Typography>
              )}

              <TextField
                margin="normal"
                required={false}
                fullWidth
                label="Password"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <Typography color={"red"}>{errors.password.message}</Typography>
              )}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link to={"/signUp"}>Don't have an account? Sign Up</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignIn;
