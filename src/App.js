import React, { useState } from 'react';
import Counter from './components/Conuter';
import Post from './components/Post';

const App = () => {  
  const [isHidePost, togglePostView] = useState(false);

  const toggle = () => togglePostView(!isHidePost);

  return (
    <div>
      <h2>Counter</h2>
      <Counter />
      <h2>Post</h2>
      <button onClick={toggle}>
        Toggle Post
      </button>
      {
        isHidePost || (
          <Post />
        )
      }
    </div>
  );
}

export default App;
