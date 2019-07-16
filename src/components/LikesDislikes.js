import React from 'react';
import firebase from '../firebase';

class LikesDislikes extends React.Component {
  constructor() {
    super();
    // Give this component easy access to firebase
    this.videoDatabase = firebase.database();
    this.state = {
      views: 0,
      likes: 0,
      dislikes: 0
    }
  }

  componentDidMount() {
    // Subscribe to the Firebase data
    this.videoDatabase.ref('video-id').on('value', (snapshot) => {
      let videoData = snapshot.val()
      // Set the views data from Firebase
      this.setState({
        views: videoData.views,
        likes: videoData.likes,
        dislikes: videoData.dislikes,
      })
    })
  }

  componentDidUpdate() {
    // Update Firebase with new state values
    this.videoDatabase.ref('video-id').update({
      views: this.state.views,
      likes: this.state.likes,
      dislikes : this.state.dislikes
    })
    .then(() => {
      console.log('firebase updated');
      // Keep the user from spamming the buttons
      setTimeout(() => {
        document.getElementById('btn-like').removeAttribute('disabled');
        document.getElementById('btn-dislike').removeAttribute('disabled');
      }, 1500);
    })
    .catch((e) => {
      alert('Could not write to database, error details:' + e);
    });
  }

  onLikeDislike = (e) => {
    // Disable both buttons until Firebase has updated
    document.getElementById('btn-like').setAttribute('disabled', 'disabled');
    document.getElementById('btn-dislike').setAttribute('disabled', 'disabled');
    if(e.target.id === 'btn-like') {
      this.setState({
        likes: this.state.likes + 1,
        views: this.state.views + 1
      })
    } else {
      this.setState({
        dislikes: this.state.dislikes + 1,
        views: this.state.views + 1
      })
    }
  }

  render() {
    return (
      <div className='social'>
        <div className='social__view-counter'>
          Total views: <span id='like-count'>{this.state.views}</span>
        </div>
        <div className='social__likes'>
          <button type='button' id='btn-like' onClick={this.onLikeDislike}>LIKE THIS VIDEO ({this.state.likes})</button>
          <button type='button' id='btn-dislike' onClick={this.onLikeDislike}>DISLIKE THIS VIDEO ({this.state.dislikes})</button>
        </div>
    </div>

    )
  }
}

export default LikesDislikes;