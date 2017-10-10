import React from "react";
import Dropzone from 'react-dropzone';
// import { Container } from "../../components/Grid";
//import Jumbotron from "../../components/Jumbotron";

const profile = () =>
  <div className="container">
        <div className="row">
            <div className="col-md-4">
                <img src="./assets/images/favicon.png" alt="Logo" />
            <form>
                <FileInput name="myImage"
                   accept=".jpeg,.jpg,.png,.gif"
                   placeholder="My Image"
                   className="inputClass"
                   onChange={this.handleChange} />
            </form>
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
            <div className="col-md-8">
                <h1>Recent Posts</h1><br />
                <h3>Art</h3>
                <button type="button" onclick="chooseFile();">Upload Here!</button>
                <div></div>
                <hr />
                <h3>Music</h3>
                <button type="button" onclick="chooseFile();">Upload Here!</button>
                <div></div>
                <hr />
                <h3>Photography</h3>
                <button type="button" onclick="chooseFile();">Upload Here!</button>
                <div></div>
                <hr />
                <h3>Writing</h3>
                <button type="button" onclick="chooseFile();">Upload Here!</button>
                <div></div>
                <hr />
                <h3>Video</h3>
                <button type="button" onclick="chooseFile();">Upload Here!</button>
                <div></div>
                <hr />
            </div>
        </div>
    </div>
;

export default profile;