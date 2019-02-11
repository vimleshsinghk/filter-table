import React from 'react';

export class Filter extends React.Component {
  render() {
    // TODO: render the filters content here
    // HTML for each filter:
    // <button class="filter filter--selected">filter name<input className="filter__checkbox" type="checkbox"/></button>

    return this.props.filters.map(val => (
      <div key={val.name}>
        <button
          className="filter filter--selected"
          onClick={() => this.props.handleClick(val)}
        >
          {val.name}
          <input
            className="filter__checkbox"
            type="checkbox"
            checked={val.selected}
            onChange={() => {}}
          />
        </button>
      </div>
    ));
  }
}
