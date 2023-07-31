import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

  const LoadingBar = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
        >
        <CircularProgress size={75} />
    </Box>
  )
}

export default LoadingBar