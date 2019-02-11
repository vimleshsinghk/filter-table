import React from 'react';
import ReactTable from 'react-table';

export class EntityTable extends React.Component {
  render() {
    // TODO: render the entity table content here using React table

    const data = this.props.data;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: 'Entities',
              columns: [
                {
                  Header: 'Company Name',
                  accessor: 'name'
                },
                {
                  Header: 'Industry Type',
                  id: 'industry',
                  accessor: 'industry'
                }
              ]
            },
            
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
          defaultSorted={[
            {
              id: "name",
              desc: false
            }
          ]}
        />
        <br />
      </div>
    );
  }
}
