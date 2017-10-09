import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const writing = () =>
  <Container fluid>
      <div class="row">
        <form class="navbar-form navbar-left" role="search">
          <div class="col-md-4">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search" />
                </div>
        </div>
        <div class="col-md-4">    
                <button type="submit" class="btn btn-default">Submit</button>
        </div>
              </form>
        </div>
  </Container>;

export default writing;
