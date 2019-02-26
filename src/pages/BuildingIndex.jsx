import React from 'react';
import { connect } from 'react-redux';

const BuildingIndex = props => {
  const checked = building => {
    const { fire, electrical } = building.maintenance;

    return fire.checked && electrical.checked ? true : false;
  };

  return (
    <div>
      <h2 className="ml-1_5 mb-2">Buildings</h2>
      <div className="controlls">
        <button className="btn btn-primary">Add New Building</button>
        <form className="search-bar">
          <input className="search-bar-input" type="text" />
          <button className="search-bar-btn" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="building-table">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Fire</th>
              <th>Electrical</th>
            </tr>
            {props.buildings.map(building => (
              <tr className={`tr ${checked(building) ? '' : 'warn'}`}>
                <td>{building.name}</td>
                <td>{building.address}</td>
                <td>{building.maintenance.fire.checked ? '✔' : '✖'}</td>
                <td>{building.maintenance.electrical.checked ? '✔' : '✖'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = ({ buildings }) => {
  return { buildings };
};

export default connect(mapStateToProps)(BuildingIndex);
