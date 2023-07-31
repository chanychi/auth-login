import { Box, TextField, Button, FormControlLabel, Checkbox, Link } from '@mui/material';
import Alert from '@mui/material/Alert';
import useSignInForm from '../../hooks/signin/useSignInForm';

const SigninForm= () => {
  const { emailRef, passwordRef, handleFormSubmit, errMsg } = useSignInForm()

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
        variant="contained"
        sx={{ mt: 3, mb: 2, background: '#001524', '&:hover': { background: '#caf0f8', color: 'black'} }}
      >
        Sign In
      </Button>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link href="/signup" variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
      </Box>
    </Box>
  );
};

export default SigninForm;

