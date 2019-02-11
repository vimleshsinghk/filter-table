import React from 'react';

export class Filter extends React.Component {
  render() {
    // TODO: render the filters content here
    // HTML for each filter:
    // <button class="filter filter--selected">filter name<input className="filter__checkbox" type="checkbox"/></button>

    return (
      <ul className="filter__container">
        {this.props.filters.map(val => (
          <li
            key={val.name}
            className={val.selected ? 'filter filter--selected' : 'filter'}
            onClick={() => this.props.handleClick(val)}
          >
            {val.name}
            <input
              className="filter__checkbox"
              type="checkbox"
              checked={val.selected}
              onChange={() => {}}
            />
          </li>
        ))}
      </ul>
    );
  }
}
