import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const writingCreate = () =>
  <Container fluid>
      <div class="row">
			<div class="row">
      <div class="col-md-2 col-sm-2 top-30">
        <a class="btn btn-default" href="/blog">Go to Blog</a>
      </div>
    </div>
			<div class="col-md-6 col-md-offset-3">
				<form id="cms">
					<div class="form-group">
						<label for="title">Title:</label>
						<input type="text" class="form-control" id="title" />
						<br />
						<label for="body">Body:</label>
						<textarea class="form-control" rows="10" id="body"></textarea>
						<div class="form-group">
							<label for="category">Select Category:</label>
							<select class="form-control" id="category">
						    <option value="Personal">Personal</option>
						    <option value="Product Review">Product Review</option>
						    <option value="Political">Political</option>
  						</select>
						</div>
						<br />
						<button type="submit" class="btn btn-success submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
  </Container>;

export default writingCreate;
