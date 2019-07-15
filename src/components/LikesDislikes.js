import React from 'react';
import firebase from '../firebase';

class LikesDislikes extends React.Component {
  constructor() {
    super();
    this.state = {
      views: 0,
      likes: 0,
      dislikes: 0
    }
  }

  componentDidMount() {
    const videoDatabase = firebase.database();
    videoDatabase.ref('video-id').on('value', (snapshot) => {
      let videoData = snapshot.val()
      // Set the initial values from Firebase
      this.setState({
        views: videoData.views,
        likes: videoData.likes,
        dislikes: videoData.dislikes
      })
    })
  }

  onLikeDislike = (e) => {
    if(e.target.id === 'btn-like') {
      console.log('like it')
    } else {
      console.log('no like')
    }
  }

  render() {
    return (
      <div className='social'>
        <div className='social__view-counter'>
          Total views: <span id='like-count'>{this.state.views}</span>
        </div>
        <div className='social__likes'>
          <button id='btn-like' onClick={this.onLikeDislike} >LIKE THIS VIDEO ({this.state.likes})</button>
          <button id='btn-dislike' onClick={this.onLikeDislike}>DISLIKE THIS VIDEO ({this.state.dislikes})</button>
        </div>
    </div>

    )
  }
}

export default LikesDislikes;