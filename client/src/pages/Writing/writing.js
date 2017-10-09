import React from "react";
//import { Col, Row, Container } from "../../components/Grid";
//import Jumbotron from "../../components/Jumbotron";

const writing = () =>
  <div className="container">
      <div className="row">
        <form className="navbar-form navbar-left" role="search">
          <div className="col-md-4">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
        </div>
        <div className="col-md-4">    
                <button type="submit" className="btn btn-default">Submit</button>
        </div>
              </form>
        </div>
  </div>;

export default writing;
