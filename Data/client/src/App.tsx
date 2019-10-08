import * as React from 'react';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Style
// import './App.css';

class App extends React.Component {

  render() {
    if(localStorage.getItem('accessToken') ===  null || localStorage.getItem('accessToken') === undefined) {
      return <Login />
    } else {
      return <Dashboard />
    }
  }
}

export default App;