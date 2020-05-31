import React,{Component} from 'react';
import Table from 'react-bootstrap/Table';
import './TableDetails.css'

class TableDetails extends Component{
  render(){
    const tableHeader = [`Form Name`,`Text field`,'Email field',`Phone field`,'Radio button',`Name`];
    return(
      <div className='form-body'>
        <p>All Feedbacks</p>
        <Table bordered hover className='form-card form-table'>
          <thead>
            <tr>
              {tableHeader.map(column => <th key={column}>{column}</th>)}
            </tr>
          </thead>
          <tbody>
            {
              this.props.feedbackdata.map((object,index) =>
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
  }
}

export default TableDetails;
