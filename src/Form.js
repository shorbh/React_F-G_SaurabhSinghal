import React,{Component} from 'react';
import './Form.css';
import FormDetails from './FormDetails';
import TableDetails from './TableDetails';
import SubmitForm from './SubmitForm';

class Form extends Component{
  constructor(){
    super();
    this.state={
      selected: false,
      feedbackData: [],
      validationMessage:{},
      submit: false
    }
  }
  componentDidMount(){
    let feedbackData = localStorage.getItem('feedback');
    feedbackData = feedbackData? JSON.parse(feedbackData) : [];
    this.setState(() => ({feedbackData}));
  }
  handleTab = (e)=>{
    if(e.target.innerText === `Form` && this.state.selected) this.setState(() => ({selected: false}));
    else if(e.target.innerText === `Table` && this.state.selected === false)  this.setState(() => ({selected: true}));
  }
  render(){
    const style = {
                    borderBottomStyle: 'solid',
                    borderBottomColor: '#957FCF',
                    color: '#957FCF'
                  };
    const {selected,feedbackData,validationMessage,submit} = this.state;
    if(submit) return <SubmitForm />
    else
      return(
        <div>
          <div className='header'>
            <div className='header-tab' style={selected? null : style} onClick={this.handleTab} >Form</div>
            <div className='header-tab' style={selected? style : null} onClick={this.handleTab} >Table</div>
          </div>
          {
            selected? <TableDetails feedbackdata={feedbackData} /> :
            <FormDetails feedbackdata={feedbackData} validationmessage={validationMessage} handlevalidation={ errorObejct => this.setState({validationMessage: errorObejct})} submithandler= {submit => this.setState({submit}) }/>
          }
        </div>
      )
  }
}

export default Form;
