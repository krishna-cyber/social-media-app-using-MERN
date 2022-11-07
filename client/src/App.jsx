import {
  Typography,
  Grid,
  Container,
  AppBar,
  Grow,
  Toolbar,
} from "@material-ui/core";

function App() {
  return (
    <>
      <Container maxWidth='lg'>
        <AppBar position='static' color='primary'>
          <Toolbar>
            <Typography variant='h2' align='center'>
              Memories
            </Typography>
            <img src={memories} alt='memories' height={60} />
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}

export default App;
