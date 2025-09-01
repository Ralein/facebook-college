import React, { useState } from 'react';
import './App.css';

function App() {

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const [shares, setShares] = useState(0);
  const [shared, setShared] = useState(false);

  const [subscribes, setSubscribes] = useState(0);
  const [subscribed, setSubscribed] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleShare = () => {
    if (shared) {
      setShares(shares - 1);
    } else {
      setShares(shares + 1);
    }
    setShared(!shared);
  };

  const handleSubscribe = () => {
    if (subscribed) {
      setSubscribes(subscribes - 1);
    } else {
      setSubscribes(subscribes + 1);
    }
    setSubscribed(!subscribed);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Facebook Counter</p>

        <div style={{ margin: '10px' }}>
          <button
            onClick={handleLike}
            style={{
              backgroundColor: liked ? 'red' : 'green',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {liked ? ' Unlike' : ' Like'}
          </button>
          <span style={{ marginLeft: '10px' }}>Likes: {likes}</span>
        </div>

        <div style={{ margin: '10px' }}>
          <button
            onClick={handleShare}
            style={{
              backgroundColor: shared ? 'red' : 'green',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {shared ? ' Unshare' : ' Share'}
          </button>
          <span style={{ marginLeft: '10px' }}>Shares: {shares}</span>
        </div>

        <div style={{ margin: '10px' }}>
          <button
            onClick={handleSubscribe}
            style={{
              backgroundColor: subscribed ? 'red' : 'green',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {subscribed ? ' Unsubscribe' : 'Subscribe'}
          </button>
          <span style={{ marginLeft: '10px' }}>Subscribers: {subscribes}</span>
        </div>
      </header>
    </div>
  );
}

export default App;