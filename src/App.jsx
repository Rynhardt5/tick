import React from 'react';
import { Navbar, Sidebar, Main } from './components/layouts';
import './app.css';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="dashboard">
          <Sidebar />
          <Main>{this.children}</Main>
        </div>
      </React.Fragment>
    );
  }
}
