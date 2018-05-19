import React, { Component } from 'react';
import List from './components/list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>API Call Test</h1>

        <List
          users={['User 1', 'User 2']}
        />
      </div>
    );
  }
}

export default App;
