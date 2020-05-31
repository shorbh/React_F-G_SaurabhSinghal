import React from 'react';
import './SubmitForm.css';
import { FcApproval } from "react-icons/fc";

const SubmitForm = () => {
  return(
    <div className='form-card submit'>
      <div className='approve'><FcApproval /></div>
      <h2>Thank you for completing the information</h2>
    </div>
  )
}

export default SubmitForm
