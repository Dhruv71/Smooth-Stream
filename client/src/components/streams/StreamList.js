import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchStreams} from '../../actions'
import {Link} from 'react-router-dom'

class StreamList extends Component {

componentDidMount(){
    this.props.fetchStreams()
}

renderAdmin (stream){
   return this.props.currentUserId === stream.userId ? 
    <div className="right floated content">
       <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
           Edit
       </Link>
       <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
           Delete
       </Link>
    </div>: null
}

renderCreate (){
    if(this.props.isSignedIn){
        return <div style={{ textAlign:"center", margin:"10px"}}>
            <Link to="/streams/new" className="ui button primary" >Create Stream</Link>
        </div>
    }
}

renderList(){
    return this.props.streams.map(stream => {
        return (
            <div className="item" key={stream.id}>
                {this.renderAdmin(stream)}
                <i className="large middle aligned icon camera" />
                <div className="content">
                    <Link to={`/streams/show/${stream.id}`} className="header">{stream.title}</Link>
                    <div className="description">{stream.description}</div>
                    
                </div>
            </div>
        );
    });
}

    render() {
        
        return (
            <div style={{margin:"40px"}}>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {streams : Object.values(state.streams),
            currentUserId : state.auth.userId,
            isSignedIn : state.auth.isSignedIn
        };
}

const mapDispatchToProps = {
    fetchStreams
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamList)


//export default connect(mapStateToProps,{fetchStreams})(StreamList);