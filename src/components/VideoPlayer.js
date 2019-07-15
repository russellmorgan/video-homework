import React, { Component } from 'react';

class VideoPlayer extends Component {
  state = {
      playing: false,
      currentTime: 0
  };

  componentDidMount() {
    this.setState({
      currentTime: document.getElementById("current-video").currentTime
    })
  }

  timeChange = () => {
    //Update state using onTimeUpdate event built into video player
    this.setState({
      currentTime:  document.getElementById("current-video").currentTime
    })
  };

  onPlayPause = () => {
    // Toggle play/pause and update playing state
    let video = document.getElementById("current-video");
    this.setState(state => ({
      playing: !state.playing
    }));
    if(!this.state.playing) {
      video.play();
    } else {
      video.pause();
    }
  };

  render() {
    return (
      <div className="player">
        <video id="current-video" onTimeUpdate={this.timeChange}>
          <source src="http://clips.vorwaerts-gmbh.de/VfE.webm"      type="video/webm" />
          <source src="http://clips.vorwaerts-gmbh.de/VfE.ogv"       type="video/ogg"  />
          <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4"  />
        </video>
        <div className="player__controls">
          <button onClick={this.onPlayPause} id="player__play">{this.state.playing ? 'PAUSE' : 'PLAY'}</button>
          <div className="player__timestamp">
            <strong>{this.state.currentTime} <small>seconds</small></strong>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoPlayer;