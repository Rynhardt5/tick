import React from 'react';
import { Navbar, Sidebar, Main } from './layouts';
import { connect } from 'react-redux';
import './app.css';
import logo from './logo.png';
import { getBuildings } from './actions';

class App extends React.Component {
  componentDidMount() {
    this.props.getBuildings();
  }

  render() {
    console.log(this.props.buildings.length);
    return (
      <React.Fragment>
        <Navbar logo={logo} />
        <div className="dashboard">
          <Sidebar />
          <Main>
            {this.props.buildings.length > 0
              ? this.props.children
              : 'Loading...'}
          </Main>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ buildings }) => {
  return { buildings };
};

export default connect(
  mapStateToProps,
  { getBuildings }
)(App);
