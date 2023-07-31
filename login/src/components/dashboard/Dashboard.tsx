import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Dashboard.module.css';
import ProfileCard from './ProfileCard';
import LoadingBar from '../LoadingBar';
import useSignOut from '../../hooks/signout/useSignOut';
import useAuthState from '../../hooks/useAuthState';
import useRedirectIfAuth from '../../hooks/useRedirectAuth';

const Dashboard = () => {
  const { isLogged, userName, userEmail } = useAuthState();
  const { handleSignOut } = useSignOut();
  const loading = useRedirectIfAuth();

  if (loading || isLogged === null || !userName) return <LoadingBar />;

  return (
    <div className={styles.dashboardBackground}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: '#001524', color: '#fff' }}>
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {userName} <span style={{ fontSize: '15px' }}>({userEmail})</span>
            </Typography>
            <Button color="inherit" onClick={handleSignOut} size='small'>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <ProfileCard />
    </div>
  )
};

export default Dashboard;
