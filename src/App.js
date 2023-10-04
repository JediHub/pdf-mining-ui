import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

function App() {
  const onSearch = () => {

  }
  return (
    <Box className='App'>
      <Box className='App-header' > Search InDiGo</Box>
      <Box  className='App-content' p={20}>
        <TextField 
        className='App-searchBox'
        fullWidth 
        id="fullWidth" 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}/>
        <Button 
        className='App-searchButton'
        variant='outlined' onClick={onSearch} > Search </Button>
      </Box>
      <Box className='App-footer'> </Box>
    </Box>
  );
}

export default App;
