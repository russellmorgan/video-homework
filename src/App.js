import React from 'react';
import './App.scss';

// Import video player and social functionality
import VideoPlayer from './components/VideoPlayer';
import LikesDislikes from './components/LikesDislikes';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <VideoPlayer />
        <div className='social'>
          <LikesDislikes />
        </div>
      </div>
    )
  }
}

export default App;