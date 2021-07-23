import _ from 'lodash'
import {connect} from 'react-redux'
import React, { Component } from 'react'
import {fetchStream,editStream} from '../../actions'
import StreamForm from './StreamForm'

 class StreamEdit extends Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id,formValues)
    }

     render() {
         if(!this.props.stream){
            return <div>Loading....</div>
         }
         return (
             <div>
                <h3 style={{margin:"20px"}} >Edit Stream</h3>
                <StreamForm
                    initialValues={_.pick(this.props.stream,'title','description')}
                    onSubmit={this.onSubmit} />
             </div>
         )
     }
 }
 
const mapStateToProps = (state,myProps) => {
    return {stream : state.streams[myProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);