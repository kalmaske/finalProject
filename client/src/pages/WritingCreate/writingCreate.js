import React from "react";
//import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";

const writingCreate = () =>
  <div className="container">
      <div className="row">
			<div className="row">
      <div className="col-md-2 col-sm-2 top-30">
        <a className="btn btn-default" href="/blog">Go to Blog</a>
      </div>
    </div>
			<div className="col-md-6 col-md-offset-3">
				<form id="cms">
					<div className="form-group">
						<label for="title">Title:</label>
						<input type="text" className="form-control" id="title" />
						<br />
						<label for="body">Body:</label>
						<textarea className="form-control" rows="10" id="body"></textarea>
						<div className="form-group">
							<label for="category">Select Category:</label>
							<select className="form-control" id="category">
						    <option value="Personal">Personal</option>
						    <option value="Product Review">Product Review</option>
						    <option value="Political">Political</option>
  						</select>
						</div>
						<br />
						<button type="submit" className="btn btn-success submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
  </div>;

export default writingCreate;
