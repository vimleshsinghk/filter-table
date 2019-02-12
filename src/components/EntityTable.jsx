import React from 'react';
import ReactTable from 'react-table';

export class EntityTable extends React.Component {
  render() {
    // TODO: render the entity table content here using React table

    const data = this.props.data;
    const columns = [
      {
        Header: 'Entities',
        columns: [
          {
            Header: 'Company Name',
            accessor: 'name'
          },
          {
            Header: 'Industry Type',
            accessor: 'industry'
          }
        ]
      }
    ];
    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
          // filtered={[
          //   {
          //     id: 'industry',
          //     value: 'Basic Materials'
          //   } 
          // ]}
          defaultPageSize={10}
          className="-striped -highlight"
          defaultSorted={[
            {
              id: 'name',
              desc: false
            }
          ]}
        />
        <br />
      </div>
    );
  }
}
