import * as React from 'react';

import Login from './pages/components/Login';
import Dashboard from './pages/components/Dashboard';

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