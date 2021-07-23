import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal';

class  StreamDelete extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

     actions = () => {
         const { id } = this.props.match.params;

         return(
        <>
              <Link onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</Link>
              <Link to="/" className="ui button">Cancle</Link>
        </>
        )
         }

    render(){
    return (
            <Modal
                title="Delete Stream"
                content={this.props.stream ? 
                    `Are You Sure You Want To Delete "${this.props.stream.title}" Stream?` :
                    "Are You Sure You Want To Delete This Stream ?"}
                actions= {this.actions()}
           />
    );
  };
};

const mapStateToProps = (state,myProps) => {
    return {stream : state.streams[myProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream, deleteStream}) (StreamDelete);