import React, { Component } from 'react';
import Counter from './components/Conuter';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <Counter />
        <h2>Post</h2>
        <Post />
      </div>
    );
  }
}

export default App;
