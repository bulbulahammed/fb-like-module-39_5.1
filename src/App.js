import logo from './logo.svg';
import './App.css';
import { AccessAlarm, ThreeDRotation, ThumbUpIcon } from '@material-ui/icons';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useState } from 'react';


function App() {
  const [likeColor, setLikeColor] = useState('');
  const handleLike = () => {
    const color = likeColor ? '' : 'primary';
    setLikeColor(color);
  }
  return (
    <div className="App">
      <AccessAlarm></AccessAlarm>
      <ThreeDRotation></ThreeDRotation>
      <ThumbUpAltIcon onClick={handleLike} color={likeColor}></ThumbUpAltIcon>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
