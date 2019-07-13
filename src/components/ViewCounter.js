import React from 'react';

class ViewCounter extends React.Component {
  render() {
    return (
      <div className='social__view-counter'>
        Total likes: <span id='like-count'>999999</span>
      </div>
    )
  }
}

export default ViewCounter;