import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './components/list';
import { FETCH_DATA_REQUEST } from './actions';

class App extends Component {

  getUsers = () => {
    console.log('get users');
    this.props.getUserData();
  }

  render() {
    const { users, error } = this.props;

    return (
      <div>
        <h1>API Call Test</h1>

        <button onClick={this.getUsers}>Get Users</button>

        {error
          ? <p style={{color: 'red'}}>{error.message}</p>
          : <List
              users={users}
            />
        }
        
      </div>
    );
  }
}

const mapStateToProps = ({ users, error }) => ({
  users,
  error
})

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch({type: FETCH_DATA_REQUEST})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);