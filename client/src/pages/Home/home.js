import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Home extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div><div className="container">
      <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-7" style={{fontFamily: 'Permanent Marker, cursive'}}>>
            <center><h1 className="display-3">Aggrandize</h1>
              <hr />
            <br />
            <p className="lead">(v.) increasing the power, greatness, and wealth of</p></center>
            </div>
            <div className="col-md-5">
              <img id="jumPic" src="./assets/images/favicon1.png" alt="creative brain" />
            </div>
            </div>
          </div>
      </div>
    </div>


    <div className="container">
      <div className="row">
        <div className="col-md-6" >
            <div style={{fontFamily: 'Permanent Marker, cursive'}}>  
          <center><h2>About the Site</h2></center></div>
          <div className="bubble"><p>At its crux, Name of App is a beacon for those suffering from depression and mental illness. 
          The application gives freedom of expression to users in need of liberating their innermost turmoil in a multitude of platforms. 
          The app allows users to showcase poetry, short stories, photography, originally composed music, mini films, and video through 
          social media and an aggregate website.</p>
              
          <p>The application gives those voice who would otherwise stifle their muse and remain disjointed from the staggering population 
          languishing from mental illness. The ingenuity of the application stems from its ability to platform creative expression, encourage 
          and support connection among users, raises awareness of mental illness, and boons a healthy means to tackle pernicious emotions.  
          </p>
          </div>
          <br />
        </div>
        <div className="col-md-6">
            <center><div style={{fontFamily: 'Permanent Marker, cursive'}}>
         <h2>Want to Join In?</h2></div></center>
         <center>
           {
              !isAuthenticated() && (
                <div>
                  <h2>Want to Join In?</h2>
                  <Button
                    bsStyle="primary"
                    bsSize="large"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                  &nbsp;
                  <Button
                    bsStyle="primary"
                    bsSize="large"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Sign Up
                  </Button>
                  </div>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    bsSize="large"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            } 
            </center>
        </div>
      </div>
    </div></div>
    );
  }
}

export default Home;
