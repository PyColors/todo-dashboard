import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Todos } from '../features/todos/Todos';
import { Quote } from '../features/quote/Quote';
// import { Unsplash } from '../features/unsplash/Unsplash';
// import { Weather } from '../features/weather/Weather';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo Dashboard
          </Typography>
          {/* <Weather /> */}
        </Toolbar>
      </AppBar>

      <Container maxWidth="md">
        <Todos />
        <Quote />
        {/* <Unsplash /> */}
      </Container>
    </Box>
  );
}

export default App;
