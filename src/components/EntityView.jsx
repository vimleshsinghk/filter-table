import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EntityTable } from './EntityTable';
import { Filter } from './Filter';

export class EntityView extends React.Component {
  render() {
    const Filters = this.props.filters.map(val => (
      <Filter key={val} name={val} />
    ));
    // TODO: render the filters and the entity table components here, uisng Bootstrap React for the layout
    // the data and filters are passed from the parent component (App.js) as "data" and "industry" props
    return (
      <Container>
        <Row>
          <Col xs={12} md={3}>
            {Filters}
          </Col>
          <Col xs={12} md={9}>
            <EntityTable data={this.props.data} />;
          </Col>
        </Row>
      </Container>
    );
  }
}
