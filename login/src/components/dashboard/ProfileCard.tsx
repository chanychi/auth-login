import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import walterWhiteImage from '../../assets/walterwhite.jpeg';

interface Styles {
  container: React.CSSProperties;
  card: React.CSSProperties;
  avatarContainer: React.CSSProperties;
}

const styles: Styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '3.5rem',
    height: '100vh',
  },
  card: {
    maxWidth: 345,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 16,
  },
};

const personInfo = {
  name: 'Walter H. White',
  age: 52,
  location: 'New Mexico',
  occupation: 'Chemistry Teacher',
  bio: 'As a teacher, Walter was respected and admired by both students and colleagues. He possessed a remarkable ability to inspire curiosity and foster a love for science in the hearts of his students. His classroom was a place of discovery and intellectual growth, where young minds were encouraged to question, explore, and embrace the wonders of the natural world.'
};

export default function ProfileCard() {
  return (
    <div style={styles.container}>
      <Card sx={styles.card}>
        <CardContent>
          <div style={styles.avatarContainer}>
            <Avatar
              alt={personInfo.name}
              src={walterWhiteImage}
              sx={{ width: 140, height: 140 }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>
                {personInfo.name}
              </Typography>
          </div>
          <div style={{ textAlign: 'left' }}>
            <Typography variant="body2"><strong>Age:</strong> {personInfo.age}</Typography>
            <Typography variant="body2"><strong>Location:</strong> {personInfo.location}</Typography>
            <Typography variant="body2"><strong>Occupation:</strong> {personInfo.occupation}</Typography>
            <Typography variant="body2"><strong>Biography:</strong> {personInfo.bio}</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
