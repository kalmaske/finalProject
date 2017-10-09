import React from "react";
import { Container } from "../../components/Grid";
//import Jumbotron from "../../components/Jumbotron";

const profile = () =>
  <Container fluid>
        <div class="row">
            <div class="col-md-4">
                <img src="./assets/images/favicon.png" alt="Logo" />
                <h2>About Me</h2>
                <p>Stuff goes here about yourself for your profile. 
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining 
                essentially unchanged. It was popularised in the 1960s with 
                the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus 
                PageMaker including versions of Lorem Ipsum.</p>
            <hr width="1" size="500" />
            </div>
            <div class="col-md-8">
                <h1>Recent Posts</h1><br />
                <h3>Art</h3>
                <div></div>
                <hr />
                <h3>Music</h3>
                <div></div>
                <hr />
                <h3>Photography</h3>
                <div></div>
                <hr />
                <h3>Writing</h3>
                <div></div>
                <hr />
                <h3>Video</h3>
                <div></div>
                <hr />
            </div>
        </div>
  </Container>;

export default profile;
