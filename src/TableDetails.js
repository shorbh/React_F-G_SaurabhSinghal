import React from 'react';
import Table from 'react-bootstrap/Table';
import './TableDetails.css'

const TableDetails = (props)=>{
  const tableHeader = [`Form Name`,`Text field`,'Email field',`Phone field`,'Radio button',`Name`];
  if(props.feedbackdata.length)
    return(
      <div className='form-body'>
        <p style={{ color: '#1b6ca8'}}>All Feedbacks</p>
        <Table bordered hover className='form-card form-table'>
          <thead>
            <tr>
              {tableHeader.map(column => <th key={column}>{column}</th>)}
            </tr>
          </thead>
          <tbody>
            {
              props.feedbackdata.map((object,index) =>
                <tr key={index}>
                  <td>Aromatic Bar</td>
                  {
                    Object.values(object).map((res,index) =>
                      <td key={index}>{res}</td>
                    )
                  }
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
    )
  else return<div></div>;
}

export default TableDetails;
