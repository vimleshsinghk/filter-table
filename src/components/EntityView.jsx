import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EntityTable } from './EntityTable';
import { Filter } from './Filter';

export class EntityView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterList: this.props.filters.map(val => {
        return { name: val, selected: true };
      }),
      data: this.props.data
    };
  }

  handleFilterChange(val) {
    this.setState(prevState => {
      const newFilterList = prevState.filterList.map(item => {
        if (item.name === val.name) item.selected = !item.selected;
        return item;
      });

      const filterdData = this.props.data.filter(data => {
        let found = false;
        newFilterList.forEach(item => {
          if (item.selected && item.name === data.industry) {
            found = true;
            return;
          }
        });
        return found;
      });

      return { filterList: newFilterList, data: filterdData };
    });
  }

  render() {
    // TODO: render the filters and the entity table components here, uisng Bootstrap React for the layout
    // the data and filters are passed from the parent component (App.js) as "data" and "industry" props
    return (
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <Filter
              filters={this.state.filterList}
              handleClick={val => this.handleFilterChange(val)}
            />
          </Col>
          <Col xs={12} md={9}>
            <EntityTable data={this.state.data} />;
          </Col>
        </Row>
      </Container>
    );
  }
}
