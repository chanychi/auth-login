import { Grid, Box, TextField, Button, FormControlLabel, Checkbox, Link } from '@mui/material';
import Alert from '@mui/material/Alert';
import useSignInForm from '../hooks/useSignInForm';
// import useSignInWithEmailAndPasswordFirebase from '../hooks/useSignInWithEmailAndPasswordFirebase';


const SigninForm= () => {
  const { emailRef, passwordRef, handleFormSubmit, notFilled, errMsg } = useSignInForm()

  return (
    <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        defaultValue="test@gmail.com"
        inputRef={emailRef}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        defaultValue="password007"
        inputRef={passwordRef}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      {errMsg.length ? (
          <Alert severity="error" >
          <span>{errMsg}</span>
          </Alert>
        ) : null
      }
      <Button
        type="submit"
        fullWidth
        disabled={notFilled}
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="/signin
          " variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SigninForm;

