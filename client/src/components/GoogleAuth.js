import React from 'react';
import { connect} from 'react-redux';
import { signIn, signOut} from '../actions';
import GOOGLE_TOKEN from '../config';

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId : GOOGLE_TOKEN,
                scope : 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = (isSignedIn) => {
          if(isSignedIn){
              this.props.signIn(this.auth.currentUser.get().getId());
          }
          else{
              this.props.signOut()
          }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderButton(){
        if( this.props.isSignedIn === null){
            return null
        }
        else if(this.props.isSignedIn){
            return (
                <button className=" ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        }
        else{
            return (
                <button onClick={this.onSignInClick} className="ui red google button" >
                  <i className="google icon " />
                  SignIn with Google
                </button>
            )
        }
    }


    render(){
        return(
           <div>{this.renderButton()}</div>
        );
    };
}

const mapStateToProps = (state) => {
    return { isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps,{ signOut, signIn}) (GoogleAuth);