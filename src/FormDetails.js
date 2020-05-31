import React from 'react';
import './common.css';
import './FormDetails.css';
import serializeForm from 'form-serialize';

const FormDetails = (props)=>{
  const validationHandler = formFieldsValues =>{
    let errorObject ={};
    const style = {borderColor: '#d63447'};
    const error = 'Error: This is Mandatory field';
    if(formFieldsValues.text === undefined || formFieldsValues.text.trim() === '') errorObject.text = {error,style};
    if(formFieldsValues.email === undefined || formFieldsValues.email.trim() === '') errorObject.email = {error,style};
    else if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formFieldsValues.email.trim()) !== true)
    {
      errorObject.email = {error:'Error: Please enter correct email address',style};
    }
    if(formFieldsValues.phone === undefined) errorObject.phone = {error,style};
    else if(formFieldsValues.phone.length !== 10) errorObject.phone = {error:'Error: Please fill a ten digit number',style};
    if(formFieldsValues.radio === undefined) errorObject.radio = {error,style};
    if(formFieldsValues.name === undefined || formFieldsValues.name.trim() === '') errorObject.name = {error,style};
    return Object.keys(errorObject).length?  props.handlevalidation(errorObject) : true
  }
  const submitHandler = (event)=>{
    event.preventDefault();
    const formFieldsValues = serializeForm(event.target,{hash:true});
    if(validationHandler(formFieldsValues) === true)
    {
      const feedbackData = [...props.feedbackdata, formFieldsValues];
      localStorage.setItem('feedback',JSON.stringify(feedbackData));
      props.submithandler(true);
    }
  }
    const {text,email,phone,radio,name} = props.validationmessage;
    return(
      <div className="form-body">
        <p style={{ color: '#1b6ca8'}}>Aromatic Bar</p>
        <p>We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you.</p>
        <div className='form-card'>
          <form id='form' onSubmit={submitHandler}>
            <label className="label-input">
              <p>Text field<span>*</span></p>
              <input type = 'text' name='text' style={text === undefined? {}: text.style} className='form-input' placeholder='please give the feedback' />
              <div className='form-error'>{text === undefined? '': text.error}</div>
            </label>
            <label className="label-input">
              <p>Email Field<span>*</span></p>
              <input type = 'text' name='email' style={email === undefined? {}: email.style} className='form-input' placeholder='please enter your email' />
              <div className='form-error'>{email === undefined? '': email.error}</div>
            </label>
            <label className="label-input">
              <p>Phone Field<span>*</span></p>
              <input type = 'number' name='phone' style={phone === undefined? {}: phone.style} className='form-input' placeholder='1234567897 without 0 or country code(eg. +91)' />
              <div className='form-error'>{phone === undefined? '': phone.error}</div>
            </label>
            <label className="label-input">
              <p>Radio Button<span>*</span></p>
              <div className="label-radio">
                <label>
                  <input type = 'radio' name='radio' value='Excellent'/>Excellent
                </label>
                <label>
                  <input type = 'radio' name='radio' value='Good' />Good
                </label>
                <label>
                  <input type = 'radio' name='radio' value='Fair' />Fair
                </label>
                <label>
                  <input type = 'radio' name='radio' value='Bad' />Bad
                </label>
              </div>
              <div className='form-error'>{radio === undefined? '': radio.error}</div>
            </label>
            <label className="label-input">
              <p>Name<span>*</span></p>
              <input type = 'text' name='name' style={name === undefined? {}: name.style} className='form-input' placeholder='please enter your name' />
              <div className='form-error'>{name === undefined? '': name.error}</div>
            </label>
          </form>
        </div>
        <button form='form' type='submit' >Submit</button>
      </div>
    )
}

export default FormDetails;
