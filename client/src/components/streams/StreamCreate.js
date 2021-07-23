import React from "react";
import {connect} from 'react-redux';
import {createStream} from '../../actions/';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  
    
  onSubmit = (formVals) => {
    this.props.createStream(formVals)
  }


  render() {
    return (
      <div>
        <h3 style={{margin:"20px"}}>Create  Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
      
    );
  }
}


export default connect(null,{createStream})(StreamCreate);