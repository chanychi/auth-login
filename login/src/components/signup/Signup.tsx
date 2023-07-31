import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Alert from '@mui/material/Alert';
import useSignUpForm from '../../hooks/signup/useSignUpForm';
import useAuthState from '../../hooks/useAuthState';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function SignUp() {
  const { isLogged } = useAuthState();
  const navigate = useNavigate();
  const [isReady, setReady] = useState(false);
  const {
    firstNameRef,
    lastNameRef,
    emailRef,
    passwordRef,
    passwordConfirmRef,
    passwordError,
    handleSubmit,
    errMsg
  } = useSignUpForm();

  useEffect(() => {
    if (isLogged !== null) {
      setReady(true);
      if (isLogged) {
        navigate('/dashboard');
      }
    }
  }, [navigate, isLogged]);

  if (!isReady) {
    return null;
  }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  inputRef={firstNameRef}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  inputRef={lastNameRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={emailRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  inputRef={passwordRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="Confirm Password"
                  type="password"
                  id="passwordConfirm"
                  inputRef={passwordConfirmRef}
                />
              </Grid>
            </Grid>

            {passwordError ? (
              <Box sx={{ mt: 2 }}>
                <Alert severity="error">
                  <span>Password Must Match!</span>
                </Alert>
              </Box>

            ): null}
            {errMsg.length ? (
              <Box sx={{ mt: 2 }}>
                <Alert severity="error">
                  <span>{errMsg}</span>
                </Alert>
              </Box>

            ): null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: '#001524', '&:hover': { background: '#caf0f8', color: 'black'} }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}