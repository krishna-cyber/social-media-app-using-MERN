import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Grow from "@material-ui/core/Grow";

import Form from "./components/form/Form";
import Posts from "./components/posts/Posts";
import memories from "./images/memories.png";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth='lg'>
        <AppBar className={classes.appbar} position='static' color='inherit'>
          <Typography className={classes.heading} variant='h2' align='center'>
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt='memories'
            height='60'
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent='space-between'
              alignItems='stretch'
              spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
}

export default App;
