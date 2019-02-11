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
      filters: this.props.filters.map(val => {
        return { name: val, selected: true };
      }),
      data: this.props.data
    };
  }

  handleFilterChange(val) {
    this.setState(prevState => {
      prevState.filters.forEach(item => {
        if (item.name === val.name) item.selected = !item.selected;
      });
      const filterData = this.props.data.filter(data => {
        let found = false;
        prevState.filters.forEach(item => {
          if (item.selected && data.industry === item.name) {
            found = true;
            return;
          }
        });
        return found;
      });
      return { filters: prevState.filters, data: filterData };
    });
  }

  render() {
    // TODO: render the filters and the entity table components here, uisng Bootstrap React for the layout
    // the data and filters are passed from the parent component (App.js) as "data" and "industry" props
    return (
      <Container>
        <Row>
          <Col xs={12} md={2}>
            <Filter
              filters={this.state.filters}
              handleClick={val => this.handleFilterChange(val)}
            />
          </Col>
          <Col xs={12} md={10}>
            <EntityTable data={this.state.data} />;
          </Col>
        </Row>
      </Container>
    );
  }
}
