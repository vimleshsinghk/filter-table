import React from 'react';

export class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
  handleClick(e,ele) {
    console.log(e,ele);
    this.setState({ selected: !this.state.selected });
  }
  handleChange(e,ele) {
    console.log(e,ele);
    this.setState({ selected: !this.state.selected });
  }
  render() {
    // TODO: render the filters content here
    // HTML for each filter:
    // <button class="filter filter--selected">filter name<input className="filter__checkbox" type="checkbox"/></button>

    return (
      <div>
        <button
          className="filter filter--selected"
          onClick={(e) => this.handleClick(e,this)}
        >
          {this.props.name}
          <input
            className="filter__checkbox"
            type="checkbox"
            checked={this.state.selected}
            onChange = {(e) => this.handleChange(e)}
          />
        </button>
      </div>
    );
  }
}
